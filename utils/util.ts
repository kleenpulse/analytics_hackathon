import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classes: ClassValue[]) => {
	return twMerge(clsx(...classes));
};

/**
 * Returns an Encrypted a string .
 * @function encryptString - Encodes or encrypts a string using a base64 Buffer
 * @returns A encoded string .
 */
export const encryptString = (str: string): string => {
	const buffer = Buffer.from(str);
	return buffer.toString("base64");
};

/**
 * Decodes and Returns a string .
 * @function decryptString - Decodes or decrypts an encrypted string Buffer
 * @returns A decoded string .
 */

export const decryptString = (str: string): string => {
	const buffer = Buffer.from(str, "base64");
	return buffer.toString();
};

/**
 * Shrink a string to a specified length(len).
 * @function shrinkString
 * @param {string} str
 * @param {number} len
 * @returns {string}
 */
export const shrinkString = ({
	str,
	len,
}: {
	str: string;
	len: number;
}): string => {
	if (!str) return "";
	if (str.length > len) {
		return str.substring(0, len) + "...";
	}
	return str;
};
