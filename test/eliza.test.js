// Import functions to test
const { extractWordAfter, transformInput, getElizaResponse } = require('../eliza.js');

// Unit tests for helper functions
describe('Helper Functions', () => {
    test('extractWordAfter: extracts the word after a keyword', () => {
        expect(extractWordAfter('my', 'my dog is cute')).toBe('dog');
        expect(extractWordAfter('you are', 'you are amazing')).toBe('amazing');
    });

    test('extractWordAfter: returns "something" if no word follows the keyword', () => {
        expect(extractWordAfter('my', 'my')).toBe('something');
    });

    test('transformInput: correctly transforms perspective in input', () => {
        expect(transformInput('I am sad')).toBe('you are sad');
        expect(transformInput('my friend is happy')).toBe('your friend is happy');
    });

    test('transformInput: leaves unrelated words unchanged', () => {
        expect(transformInput('this is a test')).toBe('this is a test');
    });
});

// Unit tests for response logic
describe('getElizaResponse', () => {
    test('Handles "I feel" inputs correctly', () => {
        expect(getElizaResponse('I feel sad')).toBe('Why do you feel that way?');
    });

    test('Handles "because" inputs correctly', () => {
        expect(getElizaResponse('I did it because I wanted to')).toBe('Is that the real reason?');
    });

    test('Handles unrecognized inputs with fallback responses', () => {
        const fallbackResponses = [
            "Can you elaborate on that?",
            "Why do you say that?",
            "How does that make you feel?",
            "Can you tell me more?",
            "That’s interesting. Why do you think so?"
        ];
        expect(fallbackResponses).toContain(getElizaResponse('random input'));
    });
});
