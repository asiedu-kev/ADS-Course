## Program Analysis
2-1. The value return is r which is (n(n+1)(n-1)) / 2
2-2. The value return is r which is (n(n+1)(n+2))/3
2-3. The value return is r which is (n(n+1)(n+2)(n+3))/24
2.7. Induction logic.
For n = 1, the array contains 1 element and is definetely the maximum
so it's true at first case.
Suppose it's true for n
So we will prove that it's true at n+1 also.
Let's suppose that it true at n+1
That means that there is j like  1<= j <= n+1 A[j] > m.
But by looping the function, we update the m every time we met a big value
more bigger than m...so if this A[j] exists, we should surely
find it with our function..
So there's no A[j] > m and our asserrtion is true for n+1 

so the algorithm is correct.

## Big Oh

2.8 - Is 2exp(n+1) = O(2exp(n))?
2exp(n+1) = 2expn * 2 
By referring to a property if there is c as f(n) <= c.g(n) and O(g(n)) = x
=> O(fn) = O(gn) 
In our case the c value exist because f(n) = 2 g(n)
Do this assertion is right;

b - Is 22n = O(2n)?
By refering to previous questions , we will seaarch a c for the case.
c = (2exp(2n)/2exp(n)) => c = 2exp(n) 
c is not independant of n so the c is not constant and c doesn't exist...The assertion is false.


