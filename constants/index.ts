import { PublicKey } from "@solana/web3.js";

export const EXPLORER_ADDRESS_BASE = "https://explorer.solana.com/address/";

export const OPENBOOK_DEX = "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX"; // openbook now
export const OPENBOOK_DEX_DEVNET =
    "EoTcMgcDRTJVZDMZWBoU6rhYHZfkNTVEAfz3uUJRcYGj";
export const SERUM_DEX_V3_DEVNET =
    "DESVgJVGajEgKGXhb6XmqDHGz3VjdgP7rEVESBgxmroY";

export const DEX_PROGRAMS: { [key: string]: string } = {
    srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX: "Openbook Dex",
    EoTcMgcDRTJVZDMZWBoU6rhYHZfkNTVEAfz3uUJRcYGj: "Openbook Dex Devnet",
};

export const MAX_U128 = "340282366920938463463374607431768211455";

export const MARKET_ACCOUNT_FLAGS_B58_ENCODED = "W723RTUpoZ";


export function prettifyPubkey(pubkey: PublicKey, numChars = 10) {
    return pubkey.toString().slice(0, numChars) + "...";
}

export function validatePubkey(key: string) {
    try {
        new PublicKey(key);
        return true;
    } catch (e) {
        return "Invalid PublicKey";
    }
}


export const ANIMATION_SETTINGS_KEY = 'animationSettings-0.1'