#include <bits/stdc++.h>

using namespace std;

int main () {
    int X1, Y1, X2, Y2, N, dotsIt, X, Y, numberOfHits, currentTest = 1;
    
    cin >> X1 >> Y1 >> X2 >> Y2;

    while (X1 != 0 || Y1 != 0 || X2 != 0 || Y2 != 0) {
        cin >> N;
        numberOfHits = 0;

        for (dotsIt = 0; dotsIt < N; dotsIt ++) {
            cin >> X >> Y;

            if (X1 <= X && X2 >= X && Y1 >= Y && Y2 <= Y)
                numberOfHits ++;
        }

        cout << "Teste " << currentTest << endl << numberOfHits << endl;
        currentTest ++;

        cin >> X1 >> Y1 >> X2 >> Y2;
    }

    return 0;
}