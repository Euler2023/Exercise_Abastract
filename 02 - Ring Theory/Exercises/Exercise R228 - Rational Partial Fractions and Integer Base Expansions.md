---
title: "Exercise R228: Rational Partial Fractions and Integer Base Expansions"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, Polynomials, Exercise 2, printed p. 213, PDF p. 228"
created: 2026-09-06
---

# Exercise R228: Rational Partial Fractions and Integer Base Expansions

## Problem Statement

> [!question] Lang, Chapter IV, Exercise 2
>
> (a) State and prove the analogue of Theorem 5.2 for the rational numbers.
>
> (b) State and prove the analogue of Theorem 5.3 for positive integers.

## Hints

> [!hint]- Hint 1
> In (a), use one fraction for each prime-power denominator and choose its numerator in the range $0\le a<p^e$.

> [!hint]- Hint 2
> In (b), repeatedly apply division with remainder by a fixed integer base $b\ge2$.

## Solution

> [!success]- Solution
> ### Approach
> In (a), use one fraction for each prime-power denominator and choose its numerator in the range $0\le a<p^e$.
>
> ### Proof
> **(a) Precise analogue.** Every $x\in\mathbb Q$ has a unique expression
> $$
> x=z+\sum_{p}\frac{a_p}{p^{e_p}},
> $$
> where $z\in\mathbb Z$, only finitely many $e_p$ are positive, $a_p=0$ when $e_p=0$, and otherwise $0<a_p<p^{e_p}$ and $p\nmid a_p$.
>
> Write $x=A/D$ in lowest terms with $D>0$. For $D=1$ the assertion is immediate. Otherwise write $D=\prod_p p^{e_p}$. Since $D/p^{e_p}$ is invertible modulo $p^{e_p}$, choose the unique residue $a_p$ in $[0,p^{e_p}-1]$ such that
> $$
> a_p(D/p^{e_p})\equiv A\pmod{p^{e_p}}.
> $$
> It is nonzero and not divisible by $p$. Then $A-\sum_p a_pD/p^{e_p}$ is divisible by every $p^{e_p}$ and hence by $D$. Its quotient is $z$.
>
> For uniqueness, clear all denominators in the difference of two such expressions. If the exponents for a fixed prime differ, reduce the resulting equality modulo that prime after isolating its largest power; the numerator on the side with larger exponent would be divisible by the prime, a contradiction. The exponents therefore agree. Multiplying by $D$ and reducing modulo $p^{e_p}$ now gives $a_p=a'_p$ in the chosen range. Then $z=z'$. Notice that $z$ need not be the floor of $x$, because several proper fractions are added.
>
> **(b) Precise analogue.** For any integer $b\ge2$, every positive integer $N$ has a unique finite expansion
> $$
> N=d_0+d_1b+\cdots+d_rb^r,
> \qquad 0\le d_i<b,\quad d_r\ne0.
> $$
> Divide $N$ by $b$, writing $N=bq+d_0$. If $q>0$, then $q<N$; repeat. Strict decrease of the positive quotients forces termination. For uniqueness, reduce two expansions modulo $b$ to identify $d_0$, subtract it and divide by $b$, and repeat. The nonzero final digit fixes the length.

## Related Concepts

- [[02 - Ring Theory/Concepts/Partial Fraction Decomposition|Partial Fraction Decomposition]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]
- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]

## Notes

- **Source input:** Theorems 5.2 and 5.3 concern polynomial partial fractions and expansion in powers of a polynomial, respectively [S2, Ch. IV, §5, printed pp. 189-190, PDF pp. 204-205]. The integer analogues are formulated and proved here.

- **Source status:** The complete numbered statement and its subparts were checked against the original PDF at [S2, Ch. IV, Ex. 2, printed p. 213, PDF p. 228]. The solution is independently derived; any imported theorem or corrected hypothesis is identified above.
