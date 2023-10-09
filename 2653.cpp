#include <iostream>
#include <unordered_set>
#include <string>

int main() {
    std::unordered_set<std::string> jewels;
    std::string jewel;
    
    while (std::cin >> jewel) {
        jewels.insert(jewel);
    }
    
    std::cout << jewels.size() << std::endl;
    
    return 0;
}
