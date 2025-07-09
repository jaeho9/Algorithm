#include<iostream>
#include<string>
#include<queue>
#include<cmath>
#include <algorithm>
#include<stack>
#include<deque>
#include<vector>
using namespace std;



int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	
	while (1) {
		string N;
		//cin >> N;
		getline(cin,N);
		stack<char> s;
		bool ans = true;

		if (N.length() == 1 && N[0] == '.') {
			break;
		}
		for (int i = 0; i < N.length(); i++) {
			if (N[i] == '(' || N[i] == '[') {
				s.push(N[i]);
			}

			if (N[i] == ')') {
				if (s.empty() || s.top() == '[') {
					ans = false;
				}
				else {
					s.pop();
				}
			}

			if (N[i] == ']') {
				if (s.empty() || s.top() == '(') {
					ans = false;
				}
				else {
					s.pop();
				}
			}
		}
		if (s.empty() && ans) {
			cout << "yes" << "\n";
		}
		else {
			cout << "no" << "\n";
		}
	}
	
	return 0;
}