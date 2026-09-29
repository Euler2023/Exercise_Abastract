---
title: "Exercise R310: The Conormal Sequence for a Quotient Algebra"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIX, Exercise 8, printed pp. 754-755, PDF pp. 769-770"
created: 2026-09-29
---

# Exercise R310: The Conormal Sequence for a Quotient Algebra

## Problem Statement

> [!question] Lang XIX.8
> Let $R\to A$ be a commutative $R$-algebra, $I$ an ideal of $A$, and $B=A/I$. Suppose the universal derivation of $A/R$ exists. Show that the universal derivation of $B/R$ exists and that there is a natural exact sequence
> $$
> I/I^2\xrightarrow{d_{A/R}}B\otimes_A\Omega^1_{A/R}\longrightarrow\Omega^1_{B/R}\longrightarrow0.
> $$
> **Source hint:** For a $B$-module $M$, show that
> $$
> 0\longrightarrow\operatorname{Der}_R(B,M)\longrightarrow\operatorname{Der}_R(A,M)\longrightarrow\operatorname{Hom}_B(I/I^2,M)
> $$
> is exact.

## Hints

> [!hint]- Hint 1
> Modulo $I\Omega^1_{A/R}$, the differential of a product of two elements of $I$ vanishes.

> [!hint]- Hint 2
> A derivation of $A$ descends to $A/I$ exactly when it vanishes on $I$.

## Solution

> [!success]- Independent derivation
> Identify $B\otimes_A\Omega^1_{A/R}$ with $\Omega^1_{A/R}/I\Omega^1_{A/R}$. The rule $\bar i\mapsto di\bmod I\Omega$ kills $I^2$, since $d(ij)=i\,dj+j\,di$. It is $B$-linear: $d(ai)=a\,di+i\,da\equiv a\,di$. Let $Q$ be its cokernel. The map
> $$
> \bar a\longmapsto da\bmod(I\Omega+dI)
> $$
> is independent of the lift and is an $R$-derivation $B\to Q$.
>
> For any $B$-module $M$, derivations $B\to M$ correspond bijectively to derivations $D:A\to M$ vanishing on $I$. The representing $A$-linear map $\Omega\to M$ already kills $I\Omega$, because $IM=0$. It kills $dI$ exactly when $D|_I=0$. Hence it factors uniquely through $Q$, proving $Q=\Omega^1_{B/R}$ by the universal property. The asserted sequence is its cokernel presentation.
>
> The last map in the hinted sequence is $D\mapsto(\bar i\mapsto D(i))$. The identities $D(ij)=0$ and $D(ai)=aD(i)$ in $M$ make it well defined and $B$-linear. Its kernel is exactly the derivations descending to $B$, proving the hinted exactness.

## Related Concepts

- [[02 - Ring Theory/Concepts/Universal Derivations and Kahler Differentials]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences]]
- [[02 - Ring Theory/Concepts/Quotient Rings]]

## Notes

- **Source status:** [S2, Ch. XIX, Ex. 8, printed pp. 754-755, PDF pp. 769-770]. The original page image was checked; the solution above is an independent derivation.
- Neither the conormal map nor the final restriction map in the hint is claimed injective or surjective, respectively.
