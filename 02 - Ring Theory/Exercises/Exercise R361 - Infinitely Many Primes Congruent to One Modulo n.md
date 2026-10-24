---
title: "Exercise R361: Infinitely Many Primes Congruent to One Modulo n"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §10, Exercise 1, printed p. 64, PDF p. 83"
created: 2026-10-20
---

# Exercise R361: Infinitely Many Primes Congruent to One Modulo n

## Problem Statement

> [!question] Neukirch I.10.1
> **(Dirichlet's Prime Number Theorem).** For every natural number $n$ there are infinitely many prime numbers $p\equiv1\bmod n$.
>
> **Printed hint:** Assume there are only finitely many. Let $P$ be their product and consider the $n$-th cyclotomic polynomial $\phi_n$. Not all numbers $\phi_n(xnP)$, for $x\in\mathbb Z$, can equal $1$. Let $p\mid\phi_n(xnP)$ for suitable $x$. Deduce a contradiction from this. (Dirichlet's prime number theorem is valid more generally for prime numbers $p\equiv a\bmod n$, provided $(a,n)=1$ (see VII, (5.14) and VII, §13)).

## Hints

> [!hint]- Hint 1: Exclude primes dividing the chosen argument
> For $n>1$, prove $\Phi_n(0)=1$. Choose an integer $u$ divisible by $n$ and by all the allegedly finitely many primes, with $|\Phi_n(u)|>1$. A prime divisor $q$ of this value cannot divide $u$.

> [!hint]- Hint 2: Find the exact multiplicative order
> If $q\nmid n$ and $q\mid\Phi_n(u)$, the image of $u$ in $\mathbb F_q^\times$ has order exactly $n$. Use $X^n-1=\prod_{d\mid n}\Phi_d(X)$ and the fact that $X^n-1$ has no repeated root in characteristic $q$.

> [!hint]- Hint 3: Contradict the complete list
> The order $n$ divides $q-1$. Thus $q\equiv1\pmod n$, but $q$ does not divide the product of all such primes. Treat $n=1$ by Euclid's argument.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> We take natural $n$ to mean $n\ge1$. If $n=1$, every prime has the required residue. If the primes were $p_1,\ldots,p_k$, a prime divisor of $p_1\cdots p_k+1$ would be absent from the list, a contradiction.
>
> Assume $n>1$. Write $\Phi_d\in\mathbb Z[X]$ for the monic cyclotomic polynomial, using the identities
> $$
> X^m-1=\prod_{d\mid m}\Phi_d(X),\qquad \Phi_1(X)=X-1.
> $$
> Induction on $m>1$, by evaluating this identity at $X=0$, gives $\Phi_m(0)=1$: the factor $\Phi_1(0)$ is $-1$, and every other proper-divisor factor has value $1$.
>
> Suppose that only $p_1,\ldots,p_k$ satisfy $p\equiv1\pmod n$, and let $P=\prod_i p_i$, with the empty product interpreted as $1$. Since $\Phi_n$ is a nonconstant monic polynomial, choose a sufficiently large integer $x$ such that, for $u=xnP$,
> $$
> |\Phi_n(u)|>1.
> $$
> Let $q$ be a positive prime divisor of this integer. If $q\mid u$, then $\Phi_n(u)\equiv\Phi_n(0)=1\pmod q$, a contradiction. Therefore $q\nmid u$, and in particular $q\nmid nP$.
>
> Let $d$ be the multiplicative order of $\bar u\in\mathbb F_q^\times$. Since $\Phi_n$ divides $X^n-1$, we have $\bar u^n=1$, so $d\mid n$. If $d<n$, the factorization of $X^d-1$ implies that $\bar u$ is a root of some $\overline\Phi_e$ with $e\mid d<n$. It is also a root of $\overline\Phi_n$. These are two distinct factors in the factorization of $X^n-1$ modulo $q$, so that polynomial would have a repeated root. But its derivative is $nX^{n-1}$, which is nonzero at every root because $q\nmid n$. This contradiction shows $d=n$.
>
> By Lagrange's theorem in the group $\mathbb F_q^\times$, $n=d\mid q-1$. Hence $q\equiv1\pmod n$, so $q$ must be one of the primes in $P$. This contradicts $q\nmid P$. The required set of primes is infinite.

## Related Concepts

- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Source verification:** The complete exercise and any printed hint were visually checked at [S4, Ch. I, §10, Exercise 1, printed p. 64, PDF p. 83]. No source figure is required. The solution is an independent derivation.
- **Proof inputs:** The cyclotomic factorization into monic integer polynomials, the derivative criterion for repeated roots, existence of prime divisors of integers of absolute value greater than one, and Lagrange's theorem are the imported elementary inputs. The exact-order argument is proved above.
- **Scope:** This proves only the residue class $1\bmod n$. The general assertion in the parenthetical source comment is preserved but is not proved or used here. Choosing absolute value greater than one also removes any ambiguity caused by negative polynomial values.
- **Routing:** Polynomial divisibility, reduction modulo a prime, and cyclotomic factorization are primary, so the note belongs in Ring Theory.
