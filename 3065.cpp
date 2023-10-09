#include <bits/stdc++.h>

using namespace std;

int main () {
    int m, currentTest = 1;
    cin >> m;

    while (m != 0) {
        int finalResult = 0, operating, digits[3] = {0}, pos = 0;
        char lastOp = ' ';

        string operation;
        cin >> operation;

        for (auto& it : operation) {
            if (it == '+' || it == '-') {
                if (pos == 3)
                    operating = (digits[0] * 100) + (digits[1] * 10) + (digits[2]);
                else if (pos == 2)
                    operating = (digits[0] * 10) + digits[1];
                else
                    operating = digits[0];

                if (lastOp == '+') {
                    finalResult += operating;
                } else if (lastOp == '-') {
                    finalResult -= operating;
                } else {
                    finalResult = operating;
                }

                pos = 0;
                lastOp = it;
            }
            else {
                if (pos == 0)
                    digits[2] = digits[1] = digits[0] = 0;

                digits[pos] = (it - '0');
                pos ++;
            }
        }

        if (pos == 3)
            operating = (digits[0] * 100) + (digits[1] * 10) + (digits[2]);
        else if (pos == 2)
            operating = (digits[0] * 10) + digits[1];
        else
            operating = digits[0];

        if (lastOp == '+') {
            finalResult += operating;
        } else if (lastOp == '-') {
            finalResult -= operating;
        } else {
            finalResult = operating;
        }

        cout << "Teste " << currentTest << endl << finalResult << endl << endl;
        currentTest ++;

        cin >> m;
    }

    return 0;
}