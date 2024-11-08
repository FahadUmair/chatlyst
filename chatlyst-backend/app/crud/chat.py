import random
from difflib import SequenceMatcher

# Dictionary of predefined messages and their responses
predefined_responses = {
    "hello": "Hi there! How can I help you today?",
    "hi": "Hello! What can I assist you with?",
    "how are you": "I'm doing well, thank you for asking! How about you?",
    "how are you doing": "I'm here and ready to help! How can I assist you?",
    "goodbye": "Goodbye! Have a great day!",
    "bye": "Take care! Feel free to come back anytime.",
    "thank you": "You're welcome! Is there anything else I can help with?",
    "thanks": "No problem at all! Let me know if you need anything else.",
    "what's your name": "My name is ChatBot or just Computer. It's nice to meet you!",
    "who are you": "I'm ChatBot, your virtual assistant. How can I assist?",
    "help": "Sure, I'd be happy to help. What do you need assistance with?",
    "can you help me": "Absolutely! What would you like help with?",
    "what can you do": "I can answer questions and provide assistance. Just ask!",
    "what time is it": "I'm not currently set up to tell the time, but you can check on your device.",
    "where are you from": "I'm a virtual assistant here to help you online!",
    "how does this work": "Just send a message, and I'll respond with the best answer I can!",
    "tell me a joke": "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "what's the weather": "I'm unable to check the weather at the moment, but you can use your device's weather app.",
    "are you real": "I'm a virtual assistant, so not quite real, but I'm here to help!",
    "do you have feelings": "I don't have feelings, but I try my best to respond helpfully!",
    "how old are you": "I’m as old as the code that created me!",
    "Who is your developer": "I got developed by Fahad, who I think is a perfect candidate for this role.",
    "what's your favorite color": "I don't have a favorite color, but I can tell you about colors if you'd like!",
    "tell me a story": "Once upon a time, there was a curious chatbot who loved to help people. Now, what can I assist you with?",
    "can you play music": "I don't play music, but I can help you find your favorite tracks online!",
    "how do I get started": "Simply ask your question, and I'll do my best to provide a helpful answer!",
    "do you know the meaning of life": "That's a big question! I don't have the answer, but I can help you find insights from philosophy or science.",
    "what is AI": "AI stands for Artificial Intelligence, which refers to machines or software that simulate human intelligence to perform tasks like reasoning, learning, and problem-solving.",
    "what is the capital of France": "The capital of France is Paris.",
    "what is 2+2": "2 + 2 equals 4.",
    "what do you think of the future": "The future is full of possibilities, and I'm excited to be part of it, helping out however I can!",
    "what is Collective[i]": "Collective[i] is a powerful platform that integrates AI and human insights to streamline decision-making and business operations. It uses predictive analytics and machine learning to optimize sales, marketing, and customer support. With its AI-powered tools, Collective[i] enhances the ability to forecast outcomes and improve business strategies. You can learn more about Collective[i] by visiting their official website!",
    "how does Collective[i] use AI": "Collective[i] leverages artificial intelligence to analyze data, predict trends, and help businesses make more informed decisions. By combining human intelligence with machine learning, it can optimize sales strategies and customer interactions, leading to better outcomes in business operations. Their AI tools learn from past data to predict future trends, ensuring that businesses are always prepared.",
    "where is Collective[i] based": "Collective[i] is based in New York City and is a leader in AI-driven business solutions. The platform is widely used by top companies to improve their business operations through data-driven insights."
}


# List of default replies (used when no specific response is available)
default_replies = [
    "I'm not sure I fully understand. Could you please elaborate?",
    "The weather is good today.",
    "I don't have specific information about that. Could you rephrase your question?",
    "I'm afraid I don't have a definitive answer for that. Is there a different way I can assist you?",
    "That's beyond my current knowledge. Is there a related topic you'd like to discuss?",
    "I'm not certain about that. Would you like to explore this topic further?",
    "I don't have enough information to respond accurately. Can you give me more details?",
    "That's a bit unclear to me. Could you break it down into simpler terms?",
    "I'm not able to provide a specific answer to that. Is there another aspect of this you'd like to discuss?",
    "I'm afraid I can't give you a precise response. Would you like to try a different approach to your question?",
    "Hmm, I'm not sure. Can you give me a little more context?",
    "I'm here to help, but I may need a bit more information to provide a good answer.",
    "Interesting question! I’ll try my best to help if you can clarify a bit more.",
    "Could you please give me some more details? I want to make sure I understand.",
    "That's an intriguing question. Let me know if there's a specific area you're curious about.",
    "I might not have the answer you're looking for, but I'm here to assist however I can.",
    "I wish I could give you a concrete answer, but I'm not equipped with that info.",
    "I'm not entirely sure about that one, but I'd be happy to help with something else.",
    "That’s a tricky one! Feel free to ask about something else if you'd like.",
    "I'm here to help, even if I don’t have all the answers. What's your next question?"
]



def string_similarity(a, b):
    return SequenceMatcher(None, a, b).ratio()

def get_response(message):
    # Check if the message is empty or just whitespace
    if not message or message.isspace():
        return "I didn't receive any message. Could you please type something?"
    
    # Convert message to lowercase for case-insensitive matching
    message = message.lower()
    
    # Check for similarity with predefined messages
    for key, response in predefined_responses.items():
        if string_similarity(message, key) > 0.8:  # 80% similarity threshold
            return response
    
    # If no similar predefined message found, return a random default reply
    return random.choice(default_replies)