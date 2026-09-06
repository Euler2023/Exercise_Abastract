---
title: "Exercise R241: Irreducible Polynomials with One Nonreal Root Pair"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, Polynomials, Exercise 17, printed pp. 215-216, PDF pp. 230-231"
created: 2026-09-06
---

# Exercise R241: Irreducible Polynomials with One Nonreal Root Pair

## Problem Statement

> [!question] Lang, Chapter IV, Exercise 17
> Let $d\ge3$. Prove the existence of an irreducible polynomial of degree $d$ over $\mathbb Q$ with precisely $d-2$ real roots and a pair of complex conjugate roots. Use the following construction. Let $b_1,\ldots,b_{d-2}$ be distinct integers and $a>0$ an integer. The source prints
> $$
> g(X)=(X^2+a)(X-b_1)\cdots(X-b_{d-1})=X^d+c_{d-1}X^{d-1}+\cdots+c_0.
> $$
> Let $p$ be prime and $g_n(X)=g(X)+p/p^{dn}$, so that $g_n$ converges coefficientwise to $g$.
>
> (a) Prove that $g_n$ has precisely $d-2$ real roots for sufficiently large $n$. You may use calculus or any method.
>
> (b) Prove that $g_n$ is irreducible over $\mathbb Q$.

> [!warning] Source issue / scope clarification
> The source introduces only $b_1,\ldots,b_{d-2}$ on printed p. 215 but ends the product at $b_{d-1}$ on printed p. 216. That would have degree $d+1$. The intended product ends at $b_{d-2}$; the solution explicitly uses this correction.

## Hints

> [!hint]- Hint 1
> Use small disjoint real intervals around the simple real roots of the corrected $g$. Bound $|g|$ away from zero outside these intervals.

> [!hint]- Hint 2
> Apply Eisenstein to $p^{dn}g_n(X/p^n)$.

## Solution

> [!success]- Solution
> ### Approach
> Use small disjoint real intervals around the simple real roots of the corrected $g$. Bound $|g|$ away from zero outside these intervals.
>
> ### Proof
> Use the corrected polynomial $g=(X^2+a)\prod_{i=1}^{d-2}(X-b_i)$, which is monic of degree $d$ with integer coefficients. Its real roots are precisely the simple roots $b_i$.
>
> **(a)** Around each $b_i$, choose a small closed interval $I_i$ such that the intervals are disjoint and $g'$ is nonzero throughout each interval. This is possible because $g'(b_i)\ne0$ and $g'$ is continuous. The endpoint values of $g$ have opposite signs. For sufficiently small $\delta>0$, adding $\delta$ preserves all these signs, so $g+\delta$ has at least one root in each interval by the intermediate value theorem. Its derivative is still $g'$, so strict monotonicity gives exactly one root in each.
>
> Choose a large compact interval containing the $I_i$. On its closed complement of the interiors of the $I_i$, $g$ is nonzero, so $|g|$ has a positive minimum. Outside the compact interval, $|g|$ is also bounded away from zero because $|g(x)|\to\infty$. Taking $\delta$ smaller than these bounds prevents any other real root. Now $\delta=p^{1-dn}\to0$, proving the assertion for $g_n$. The remaining two roots are a nonreal conjugate pair: coefficients are real, and the fundamental theorem of algebra counts $d$ roots with multiplicity.
>
> **(b)** For every integer $n\ge1$, define
> $$
> H_n(X)=p^{dn}g_n(X/p^n)
> =X^d+c_{d-1}p^nX^{d-1}+\cdots+c_1p^{n(d-1)}X+c_0p^{dn}+p.
> $$
> All nonleading coefficients are divisible by $p$. The constant term is divisible by $p$ but not by $p^2$, because $dn\ge3$. Thus $H_n$ is Eisenstein at $p$ and irreducible over $\mathbb Q$. A nontrivial factorization of $g_n$ would yield one of $H_n$ by the invertible change of variable and multiplication by a nonzero scalar. Hence $g_n$ is irreducible. Choose any sufficiently large $n$ to satisfy both parts.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]

## Notes

- **Imported inputs:** Eisenstein’s criterion [S2, Ch. IV, §3, printed pp. 183-184, PDF pp. 198-199]; elementary real continuity, the intermediate value theorem, compact minimum theorem, and the fundamental theorem of algebra.
- **Parameter boundary:** The irreducibility argument holds for every positive integer $n$; the real-root count requires sufficiently large $n$.

- **Source status:** The complete numbered statement and its subparts were checked against the original PDF at [S2, Ch. IV, Ex. 17, printed pp. 215-216, PDF pp. 230-231]. The solution is independently derived; any imported theorem or corrected hypothesis is identified above.
