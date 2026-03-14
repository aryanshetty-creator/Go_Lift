// Motivational quotes for fitness

export const motivationalQuotes = {
    quotes: [
        "The only bad workout is the one that didn't happen.",
        "Your body can stand almost anything. It's your mind you have to convince.",
        "Don't wish for it, work for it.",
        "Success starts with self-discipline.",
        "The pain you feel today will be the strength you feel tomorrow.",
        "Push yourself because no one else is going to do it for you.",
        "Great things never come from comfort zones.",
        "Dream it. Wish it. Do it.",
        "Success doesn't come from what you do occasionally. It comes from what you do consistently.",
        "Wake up with determination. Go to bed with satisfaction.",
        "Do something today that your future self will thank you for.",
        "Little progress is still progress.",
        "Believe in yourself and all that you are.",
        "The difference between try and triumph is a little umph.",
        "Your only limit is you."
    ],

    getRandomQuote() {
        const index = Math.floor(Math.random() * this.quotes.length);
        return this.quotes[index];
    },

    getDailyQuote() {
        const day = new Date().getDate();
        const index = day % this.quotes.length;
        return this.quotes[index];
    },

    getQuoteByCategory(category) {
        // Could expand to categorize quotes
        return this.getRandomQuote();
    }
};
