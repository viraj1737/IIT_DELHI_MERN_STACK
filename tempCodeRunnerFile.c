#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int number, guess, attempts = 0;

    srand(time(0));               // random number generate karne ke liye
    number = rand() % 100 + 1;    // secret number (1–100)

    printf("Welcome to Guess Game!\n");
    printf("Guess the number between 1 and 100.\n\n");

    do {
        printf("Enter your guess: ");
        scanf("%d", &guess);

        attempts++;

        if (guess > number)
            printf("Too high! Try again.\n");
        else if (guess < number)
            printf("Too low! Try again.\n");
        else
            printf("\n🎉 Correct! You guessed the number in %d attempts.\n", attempts);

    } while (guess != number);

    return 0;
}