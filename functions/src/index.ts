import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import fetch from 'node-fetch';

// Initialize Firebase Admin SDK
admin.initializeApp();
const db = admin.firestore();

// Discord API and client-specific information
const CLIENT_ID = '1227756790582607982';
const CLIENT_SECRET = 'vAiBpo4GOYZdXqYcDBWRANXn5suo7I5h';
const DISCORD_TOKEN_ENDPOINT = 'https://discord.com/api/oauth2/token';
const DISCORD_API_BASE = 'https://discord.com/api/users/@me';
const REQUIRED_GUILD_ID = '1113915444701712524';

interface Guild {
  id: string;
}

// Firebase Cloud Function to verify Discord authentication and guild membership
export const verifyDiscord = functions.https.onCall(async (data, context) => {
  // Check if the function call is authenticated
  if (!context.auth) {
    console.error('Authentication required to invoke this function.');
    return { isConnected: false, inRequiredGuild: false, error: 'Authentication required.' };
  }

  const { code } = data;

  try {
    // Exchange the Discord OAuth2 code for an access token
    const tokenResponse = await fetch(DISCORD_TOKEN_ENDPOINT, {
      method: 'POST',
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: 'http://localhost:5173/signup'
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    if (!tokenResponse.ok) {
      throw new Error('Failed to exchange Discord OAuth2 code for token.');
    }

    const { access_token } = await tokenResponse.json();

    // Fetch user guilds from Discord using the access token
    const guildsResponse = await fetch(`${DISCORD_API_BASE}/guilds`, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });

    if (!guildsResponse.ok) {
      throw new Error('Failed to fetch user guilds from Discord.');
    }

    const guilds: Guild[] = await guildsResponse.json();
    const isMember = guilds.some((guild: Guild) => guild.id === REQUIRED_GUILD_ID);

    // Update Firestore user document
    await db.collection('users').doc(context.auth.uid).set({
      discordConnected: true,
      inRequiredGuild: isMember
    }, { merge: true });

    return { isConnected: true, inRequiredGuild: isMember };
  } catch (error) {
    console.error('Error verifying Discord connection:', error);
    return { isConnected: false, inRequiredGuild: false, error: (error as Error).message };
  }
});