---
title: "Exercise R374: Arithmetic with p-adic Digits"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §1, Exercise 6, printed p. 106, PDF p. 125"
created: 2026-10-20
---

# Exercise R374: Arithmetic with p-adic Digits

## Problem Statement

> [!question] Neukirch II.1.6
> How is the addition, subtraction, multiplication and division of rational numbers reflected in the representation by $p$-adic digits?

Digits are always chosen from $0,1,\ldots,p-1$. The rules work from the lowest power of $p$ toward higher powers. The derivation below also applies to arbitrary $p$-adic numbers; rational inputs give their ordinary rational sum, difference, product, and quotient.

## Hints

> [!hint]- Hint 1: Work modulo a power of $p$
> The first $N$ digits of a $p$-adic integer represent its residue modulo $p^N$. Addition and multiplication in $\mathbb Z_p=\varprojlim_N\mathbb Z/p^N\mathbb Z$ are defined componentwise. Determine successive digits so that these finite congruences hold.

> [!hint]- Hint 2: Carry and borrow in the increasing-power direction
> At each stage take the least nonnegative residue modulo $p$ as the next digit, and divide the remaining multiple of $p$ by $p$ to obtain the next carry. A subtraction carry can be $-1$. For multiplication, first add all products of input digits whose indices have the required sum.

> [!hint]- Hint 3: Shift before division
> A nonzero divisor is $p^sU$ with $U=u_0+u_1p+\cdots$ and $u_0\ne0$. After shifting by $p^s$, solve $UQ=A$ one digit at a time: the only unknown in degree $n$ is $u_0q_n$. Its coefficient is invertible modulo $p$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation of all four digit rules
>
> **1. Conventions and the criterion for equality.** Fix a prime $p$; it may be $2$. For every integer $t$, including a negative integer, let $[t]_p$ denote its unique representative in $\{0,\ldots,p-1\}$. Then
> $$
> t=[t]_p+p\left\lfloor\frac tp\right\rfloor.
> $$
> In particular, the quotient in this identity is a floor, not truncation toward zero: $[-1]_p=p-1$ and the corresponding quotient is $-1$.
>
> Write
> $$
> A=\sum_{n\ge0}a_np^n,\qquad B=\sum_{n\ge0}b_np^n,
> \qquad 0\le a_n,b_n<p,
> $$
> and put $A_N=\sum_{n=0}^{N-1}a_np^n$, with the analogous convention for other digit sequences. The inverse-limit description in Proposition (1.3) and the following ring construction imply that two $p$-adic integers are equal exactly when their reductions agree modulo $p^N$ for every $N\ge1$. Moreover, addition, subtraction, and multiplication reduce to those operations modulo $p^N$. [S4, Ch. II, §1, printed pp. 103–104, PDF pp. 122–123]
>
> All recursions below use an integer carry $c_n$, initialized by $c_0=0$ for each separate operation. The carry need not be a digit.
>
> **2. Addition.** To compute $D=A+B$, set recursively
> $$
> t_n=a_n+b_n+c_n,\qquad
> d_n=[t_n]_p,\qquad
> c_{n+1}=\frac{t_n-d_n}{p}.
> $$
> Thus one adds the two digits and the incoming carry, keeps the residue as the output digit, and carries the quotient to the next higher power. Here $c_n\in\{0,1\}$: if this holds at stage $n$, then $0\le t_n\le2p-1$, so it also holds at stage $n+1$.
>
> The defining equations give $a_n+b_n-d_n=pc_{n+1}-c_n$. Multiplying by $p^n$ and summing for $0\le n<N$ telescopes to
> $$
> A_N+B_N=D_N+c_Np^N.
> $$
> Hence $D_N\equiv A_N+B_N\pmod{p^N}$ for every $N$, proving $D=\sum_{n\ge0}d_np^n=A+B$.
>
> **3. Subtraction and negative carries.** To compute $D=A-B$, replace the addition rule by
> $$
> t_n=a_n-b_n+c_n,\qquad
> d_n=[t_n]_p,\qquad
> c_{n+1}=\frac{t_n-d_n}{p}.
> $$
> Now $c_n\in\{-1,0\}$: if the incoming carry belongs to this set, then $-p\le t_n\le p-1$, so its quotient after taking the least nonnegative residue is $-1$ or $0$. A carry $-1$ means that one borrows from the next higher place. The same telescoping argument gives
> $$
> A_N-B_N=D_N+c_Np^N,
> $$
> so the output is exactly $A-B$ in $\mathbb Z_p$.
>
> The borrowing need not stop. For $A=0$ and $B=1$, stage $0$ gives $d_0=p-1$ and $c_1=-1$; every later stage gives $d_n=p-1$ and $c_{n+1}=-1$. Thus
> $$
> -1=(p-1)+(p-1)p+(p-1)p^2+\cdots.
> $$
> Indeed its first $N$ digits sum to $p^N-1\equiv-1\pmod{p^N}$. An infinite borrow therefore causes no ambiguity.
>
> **4. Multiplication.** To compute $D=AB$, form the finite convolution at each degree,
> $$
> S_n=\sum_{i=0}^n a_i b_{n-i},
> $$
> and set
> $$
> t_n=S_n+c_n,\qquad
> d_n=[t_n]_p,\qquad
> c_{n+1}=\frac{t_n-d_n}{p}.
> $$
> These are finite integer calculations for each $n$. The carries are nonnegative integers and can exceed $1$. Telescoping now gives
> $$
> \sum_{n=0}^{N-1}S_np^n=D_N+c_Np^N.
> $$
> In the finite product $A_NB_N$, every term with total degree at least $N$ vanishes modulo $p^N$. The remaining terms are precisely the left-hand side. Therefore
> $$
> A_NB_N\equiv D_N\pmod{p^N}
> $$
> for every $N$, which proves the multiplication rule.
>
> This also shows directly that there are no zero divisors. If $A,B\ne0$, let $r,s$ be their first nonzero digit indices. Every product coefficient below degree $r+s$ is zero, so all preceding output digits and carries are zero. At degree $r+s$ the first output digit is $[a_rb_s]_p\ne0$, since $p$ is prime. Thus $AB\ne0$.
>
> **5. Division by a unit.** First let the divisor be
> $$
> U=\sum_{n\ge0}u_np^n,\qquad u_0\ne0,
> $$
> and seek $Q=\sum_{n\ge0}q_np^n$ with $UQ=A$. Choose an integer $\eta$ with $\eta u_0\equiv1\pmod p$. Suppose $q_0,\ldots,q_{n-1}$ and $c_n$ are known. The degree-$n$ convolution, before the new digit is chosen, has known part
> $$
> S_n=\sum_{i=1}^n u_iq_{n-i},\qquad S_0=0.
> $$
> To make the product digit equal to $a_n$, define
> $$
> \begin{aligned}
> q_n&=[\eta(a_n-S_n-c_n)]_p,\\
> c_{n+1}&=\frac{u_0q_n+S_n+c_n-a_n}{p}.
> \end{aligned}
> $$
> The first line is exactly
> $$
> q_n\equiv u_0^{-1}\left(a_n-\sum_{i=1}^n u_iq_{n-i}-c_n\right)\pmod p,
> \qquad 0\le q_n<p.
> $$
> It makes the numerator in the second line divisible by $p$, so $c_{n+1}$ is an integer. No division by $u_0$ in the ordinary integers is asserted: its inverse is used only modulo $p$.
>
> The intermediate integer $a_n-S_n-c_n$ can be negative; the bracket still means its least nonnegative residue after multiplication by $\eta$. With this particular product-carry convention, $c_n$ itself is nonnegative. Indeed, if $c_n\ge0$, then $u_0q_n+S_n+c_n\ge0$, and subtracting $a_n\le p-1$ gives a multiple of $p$ greater than $-p$; it must be nonnegative. This proves the claim inductively. The same symbol $c_n$ was allowed to be negative in subtraction, where its recurrence has a different input expression.
>
> For correctness, rearrange the recurrence as
> $$
> \sum_{i=0}^n u_iq_{n-i}-a_n=pc_{n+1}-c_n.
> $$
> Summation after multiplication by $p^n$ gives
> $$
> \sum_{n=0}^{N-1}\left(\sum_{i=0}^n u_iq_{n-i}\right)p^n
> =A_N+c_Np^N.
> $$
> Terms of degree at least $N$ in $U_NQ_N$ disappear modulo $p^N$, so $U_NQ_N\equiv A_N\pmod{p^N}$ for every $N$. Hence $UQ=A$.
>
> Applying this construction with $A=1$ produces an inverse $V$ with $UV=1$. It also proves uniqueness: if $UQ=A$, multiplication by $V$ forces $Q=VA$. Thus the constructed quotient is the ring quotient $A/U$, not merely a formal candidate. If $A=0$, the recurrence gives $q_n=c_n=0$ at every stage, so the quotient is zero.
>
> **6. General division and negative powers of $p$.** If $B\in\mathbb Z_p$ is nonzero, let $s$ be its first nonzero digit index. Then
> $$
> B=p^sU,\qquad U\in\mathbb Z_p,\quad u_0\ne0.
> $$
> The quotient is obtained by the unit algorithm and a shift:
> $$
> \frac AB=p^{-s}\frac AU.
> $$
> Thus division can create negative-power digits; it need not stay in $\mathbb Z_p$. For example, $1/p$ consists of a single digit $1$ in place $p^{-1}$.
>
> More generally, every $X\in\mathbb Q_p$ has only finitely many negative-power positions, so $X=p^rA$ for some integer $r$ and $A\in\mathbb Z_p$. For addition and subtraction, choose a common $r$ with $X=p^rA$, $Y=p^rB$. Then
> $$
> X+Y=p^r(A+B),\qquad X-Y=p^r(A-B).
> $$
> Apply the integer-digit rules and relabel place $n$ as place $n+r$. Cancellation can create leading zero digits; if all digits cancel, the result is zero.
>
> For multiplication, arbitrary choices $X=p^rA$, $Y=p^sB$ give
> $$
> XY=p^{r+s}AB.
> $$
> For division with $Y\ne0$, choose $s$ to be its first nonzero digit index, so $Y=p^sU$ with $u_0\ne0$, and choose $r$ with $X=p^rA$. Then
> $$
> \frac XY=p^{r-s}\frac AU.
> $$
> Compute $A/U$ by Step 5 and shift its digits by $r-s$. If $X\ne0$, one may choose $r$ as its first nonzero index; then $a_0\ne0$, and the quotient begins with $q_0=[\eta a_0]_p\ne0$ in place $p^{r-s}$. If $X=0$, the quotient is zero. Division by $Y=0$ is excluded; no first nonzero divisor digit then exists.
>
> For a rational example with a negative-power result, take $p=5$ and write $X=2/15=5^{-1}(2/3)$, $Y=5/3=5(1/3)$. The unit division gives $(2/3)/(1/3)=2$, and the shift gives $X/Y=2\cdot5^{-2}=2/25$.
>
> These shifts are multiplication by actual powers of $p$ in $\mathbb Q_p$, whose field-of-fractions construction is given in [S4, Ch. II, §1, printed p. 104, PDF p. 123]. Consequently different choices of a common lower place give the same result. The embedding $\mathbb Q\subseteq\mathbb Q_p$ is a field embedding on that page, so rational inputs give precisely their usual rational arithmetic.
>
> **7. Why finite precision is sufficient, and what it does not mean.** For all four algorithms in $\mathbb Z_p$ with unit division, the first $N$ output digits use only the first $N$ input digits. The congruences above prove this without setting any higher input digit equal to zero. Terms at unknown higher places cannot affect a lower-place congruence.
>
> A carry exiting place $N-1$ is retained in the integer identity modulo $p^N$ and is then irrelevant to that congruence. It is not assumed to disappear in the infinite calculation. To continue to place $N$, one must supply the actual next input digits and the appropriate incoming carry. In particular, a divisor whose first $N$ digits are all zero need not be zero: $p^N$ itself is an example. Division must first identify a genuinely nonzero leading digit and perform the required shift.
>
> Each recursion uniquely selects the next output digit. Its all-$N$ congruences identify it with the corresponding inverse-limit operation. Thus the digit rules are compatible with the ring and field operations, and inherit their associativity and distributivity; these laws are not extra assumptions about an infinite carry process.
>
> **8. One rational example showing all four operations.** Take $p=5$, $A=2/3$, and $B=1/3$. Their rational arithmetic is
> $$
> A+B=1,\qquad A-B=\frac13,\qquad AB=\frac29,\qquad \frac AB=2.
> $$
> The first six digits, listed from the lowest to the highest power, are as follows. Each row records only a residue modulo $5^6$; it does not assert that omitted digits vanish.
>
> | Number | digit at $5^0$ | $5^1$ | $5^2$ | $5^3$ | $5^4$ | $5^5$ |
> |---|---|---|---|---|---|---|
> | $A=2/3$ | $4$ | $1$ | $3$ | $1$ | $3$ | $1$ |
> | $B=1/3$ | $2$ | $3$ | $1$ | $3$ | $1$ | $3$ |
> | $A+B=1$ | $1$ | $0$ | $0$ | $0$ | $0$ | $0$ |
> | $A-B=1/3$ | $2$ | $3$ | $1$ | $3$ | $1$ | $3$ |
> | $AB=2/9$ | $3$ | $0$ | $1$ | $2$ | $4$ | $3$ |
> | $A/B=2$ | $2$ | $0$ | $0$ | $0$ | $0$ | $0$ |
>
> For addition, the first place gives $4+2=1+5\cdot1$; the next gives $1+3+1=0+5\cdot1$. For subtraction, the first place gives $4-2=2$, and the next gives
> $$
> 1-3=-2=3+5(-1).
> $$
> Thus the next subtraction carry is $-1$; the following place gives $3-1-1=1$ and carry $0$.
>
> For multiplication, the first two convolutions and carries are
> $$
> S_0=4\cdot2=8=3+5\cdot1,
> $$
> $$
> S_1+c_1=(4\cdot3+1\cdot2)+1=15=0+5\cdot3.
> $$
> At degree $2$, $S_2+c_2=4\cdot1+1\cdot3+3\cdot2+3=16=1+5\cdot3$, matching the product row.
>
> For division by $U=B$, $u_0=2$ has inverse $\eta=3$ modulo $5$. The first quotient digit is $q_0=[3\cdot4]_5=2$, with carry $(2\cdot2-4)/5=0$. The next known convolution is $S_1=3\cdot2=6$, so
> $$
> q_1=[3(1-6)]_5=0,\qquad c_2=(6-1)/5=1.
> $$
> This explicitly uses a negative intermediate difference. At degree $2$, $S_2=1\cdot2=2$, and
> $$
> q_2=[3(3-2-1)]_5=0,\qquad c_3=0.
> $$
> The later displayed digits follow in the same way; the proof in Steps 5–7 establishes the quotient for all places.
>
> Finally, the finite modulus provides an independent check of every row. Since $5^6=15625$, the first two rows represent
> $$
> A_6=5209,\qquad B_6=10417,
> $$
> and indeed $3A_6\equiv2$, $3B_6\equiv1\pmod{15625}$. Direct integer arithmetic gives
> $$
> \begin{aligned}
> A_6+B_6&\equiv1,\\
> A_6-B_6&\equiv10417,\\
> A_6B_6&\equiv12153,\\
> A_6B_6^{-1}&\equiv2
> \end{aligned}
> \qquad\pmod{15625}.
> $$
> Here $9\cdot12153\equiv2\pmod{15625}$, and the six base-$5$ digits of $12153$ are $3,0,1,2,4,3$. The inverse of $B_6$ exists because $5\nmid B_6$. These finite checks support the worked example; the all-$N$ arguments above prove the algorithms.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]
- [[04 - Linear Algebra and Modules/Concepts/Direct and Inverse Limits|Direct and Inverse Limits]]

## Notes

- **Source status:** The complete single exercise, covering all four operations, was visually checked at [S4, Ch. II, §1, Exercise 6, printed p. 106, PDF p. 125]. There is no printed hint or source figure. The three hints and the solution are independent derivations.
- **Proof inputs:** Proposition (1.3), the inverse-limit ring construction, and the realization of $\mathbb Q_p$ as a fraction field with $\mathbb Q$ as a subfield were checked at [S4, Ch. II, §1, printed pp. 103–104, PDF pp. 122–123]. Elementary integer division with remainder and the modular inverse of a nonzero element of $\mathbb F_p$ are the remaining inputs. The carry recursions, unit-division construction, absence of zero divisors, uniqueness, and shifts are proved above. No completeness theorem, Hensel lemma, periodicity theorem, or pre-existing unit criterion is used to justify the algorithms.
- **Boundary:** The proof works for every prime, including $p=2$. It keeps canonical nonnegative digits while allowing signed carries, explicitly handling subtraction borrows and negative division intermediates. Zero numerators are allowed; division by zero is excluded. A nonunit divisor first requires extraction of its power of $p$ and may yield negative-power digits.
- **Precision:** Truncations are used only to verify congruences. Unknown higher digits are never declared zero, and a zero finite divisor prefix is never used to conclude that the divisor itself is zero. General $\mathbb Q_p$ arithmetic follows by a finite shift to $\mathbb Z_p$, so the solution is not restricted to rational numbers with denominator prime to $p$.
- **Computational check:** Exact modular arithmetic independently verified all six-digit rows for $p=5$, $A=2/3$, and $B=1/3$ modulo $15625$, including the multiplication and division carry examples. This is a finite check, distinct from the proof for all digits.
- **Routing:** Ring Theory is primary because residue-ring operations, integer carries, units, and passage to a fraction field determine the digit rules. The inverse-limit viewpoint explains their compatibility.
