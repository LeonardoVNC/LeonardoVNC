const specialChars = /[!@#$%^&*?:{}|<>]/;

export const filterByWords = (input: string, searchText: string) => {
    if (searchText.trim().length <= 0) return true

    const lower = searchText.trim().toLowerCase();
    const words = lower.split(" ");

    const filterWords = (text: string, words: string[]) => {
        let match = true;
        for (const word of words) {
            if (!match) return false
            if (specialChars.test(word)) continue;
            match = match && text.toString().toLowerCase().includes(word);
        }
        return match;
    }

    return filterWords(input, words)
}