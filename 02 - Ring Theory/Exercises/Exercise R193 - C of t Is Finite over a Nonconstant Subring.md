---
title: "Exercise R193: C[t] Is Finite over a Nonconstant Subring"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - integral-extensions
  - finite-modules
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Miscellaneous Problem M.7, printed p. 441, PDF p. 453"
created: 2026-08-28
---

# Exercise R193: C[t] Is Finite over a Nonconstant Subring

## Problem Statement

> [!question] Miscellaneous Problem M.7
> Let $S$ be a subring of the polynomial ring $R=\mathbb C[t]$ that contains $\mathbb C$ and is not equal to $\mathbb C$. Prove that $R$ is a finitely generated $S$-module.

## Hints

> [!hint]- Hint 1
> Choose a nonconstant $f(t)\in S$ and write a monic equation for $t$ over $\mathbb C[f]$.

## Solution

> [!success]- Solution
> Choose
>
> $$
> f(t)=a_nt^n+a_{n-1}t^{n-1}+\cdots+a_0\in S
> $$
>
> of positive degree. Since $a_n\in\mathbb C^\times$, the equation
>
> $$
> t^n+\frac{a_{n-1}}{a_n}t^{n-1}+\cdots+\frac{a_0-f}{a_n}=0
> $$
>
> is monic with coefficients in $\mathbb C[f]\subseteq S$. Hence $t$ is integral over $\mathbb C[f]$, and repeated reduction of powers shows
>
> $$
> \mathbb C[t]=\mathbb C[f]\cdot1+\mathbb C[f]\cdot t+\cdots+\mathbb C[f]\cdot t^{n-1}.
> $$
>
> Enlarging the coefficient ring from $\mathbb C[f]$ to $S$ preserves this generating set. Therefore
>
> $$
> \boxed{R=S\cdot1+S\cdot t+\cdots+S\cdot t^{n-1}}
> $$
>
> is a finitely generated $S$-module.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Routing:** Ring Theory is primary because integrality of $t$ over a one-polynomial subring yields module finiteness.
- **Source status:** [S1, Ch. 14, Misc. M.7, printed p. 441, PDF p. 453]. The monic-equation proof is independent.
