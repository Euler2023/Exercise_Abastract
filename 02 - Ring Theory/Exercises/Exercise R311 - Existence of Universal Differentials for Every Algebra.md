---
title: "Exercise R311: Existence of Universal Differentials for Every Algebra"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIX, Exercise 9, printed p. 755, PDF p. 770"
created: 2026-09-29
---

# Exercise R311: Existence of Universal Differentials for Every Algebra

## Problem Statement

> [!question] Lang XIX.9
> Let $R\to B$ be a commutative $R$-algebra. Show that the universal derivation of $B/R$ exists as follows. Represent $B$ as a quotient of a polynomial ring, possibly in infinitely many variables. Apply Exercises 6 and 7.

> [!warning] Source issue
> The printed instruction says “Exercises 6 and 7.” Exercise 7 assumes the universal derivations already exist and cannot establish existence for the quotient. The needed reference is Exercises 6 and 8; the printed instruction is retained above.

## Hints

> [!hint]- Hint 1
> Use one polynomial variable for each element of $B$.

> [!hint]- Hint 2
> The quotient construction is Exercise 8.

## Solution

> [!success]- Independent derivation
> Let $P=R[X_b\mid b\in B]$ and send $X_b$ to $b$. This defines a surjective $R$-algebra map $\pi:P\to B$; let $I=\ker\pi$. Exercise 6 constructs $\Omega^1_{P/R}=\bigoplus_{b\in B}P\,dX_b$. Exercise 8 then constructs
> $$
> \Omega^1_{B/R}=
> \left(\bigoplus_{b\in B}B\,dX_b\right)
> \big/\left\langle\sum_b\pi\left(\frac{\partial f}{\partial X_b}\right)dX_b:f\in I\right\rangle_B.
> $$
> Define $d_B(\pi f)$ to be the class of $\sum_b\pi(\partial f/\partial X_b)dX_b$. Changing $f$ by an element of $I$ changes the expression by a defining relation. The product rule descends from $P$.
>
> If $D:B\to M$ is an $R$-derivation, its pullback to $P$ is determined by $D(b)$ on $X_b$ and kills $I$. Thus the free map $dX_b\mapsto D(b)$ kills all displayed relations and factors uniquely through $\Omega^1_{B/R}$. Conversely every factor map gives $D$ by composition with $d_B$. This proves existence without assuming it in advance and shows independence, up to unique canonical isomorphism, of the chosen presentation.

## Related Concepts

- [[02 - Ring Theory/Concepts/Universal Derivations and Kahler Differentials]]
- [[02 - Ring Theory/Concepts/Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Quotient Rings]]

## Notes

- **Source status:** [S2, Ch. XIX, Ex. 9, printed p. 755, PDF p. 770]. The original page image was checked; the solution above is an independent derivation.
- **Proof dependency:** The polynomial and quotient constructions are proved in Exercises R308 and R310.
