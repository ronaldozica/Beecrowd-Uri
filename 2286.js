#include <iostream>
 
using namespace std;
 
int main () {
    int numberOfTests;
    char player1[11], player2[11];
    int player1Number, player2Number;
    int currentTest = 1;

    cin >> numberOfTests;

    while (numberOfTests > 0) {
        cin >> player1;
        cin >> player2;

        cout << "Teste " << currentTest << endl;
        currentTest ++;

        int it;
        for (it = 0; it < numberOfTests; it ++) {
            cin >> player1Number;
            cin >> player2Number;

            if ( (player1Number + player2Number) % 2 == 0) {
                cout << player1 << endl;
            } else {
                cout << player2 << endl;
            }
        }

        cout << "\n";
        cin >> numberOfTests;
    }
 
    return 0;
}