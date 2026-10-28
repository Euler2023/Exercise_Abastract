---
title: "Exercise LA614: Duality between Quotients and Ideal Annihilators"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 6, Section 6.5, Exercise 6.5.3, printed p. 243, PDF p. 257"
source_refs:
  - "S7/ch-6/sec-5/ex-3"
created: 2026-10-28
---

# Exercise LA614: Duality between Quotients and Ideal Annihilators

## Problem Statement

> [!question] Original Exercise 6.5.3
> Prove the isomorphisms (6.13). (A hint for this exercise is at the end of the book.)

> **Referenced context.** For a finite-dimensional $k$-vector space $M$ with a commuting $k$-linear action of a commutative unital ring $A$, set $M[J]=\{m:am=0\text{ for all }a\in J\}$. Formula (6.13), printed p. 239 / PDF p. 253, states
> $$
> (M/JM)^\vee\simeq M^\vee[J],\qquad
> M^\vee/JM^\vee\simeq M[J]^\vee.
> $$

## Hints

> [!hint]- Hint 1
> A linear functional on $M/JM$ is the same as one on $M$ vanishing on $JM$. Translate this condition into $J$ annihilating the functional.

> [!hint]- Hint 2
> For the second map restrict a functional to $M[J]$. Show the kernel is $JM^\vee$ by finite-dimensional annihilator duality.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Assume $A$ is a commutative unital ring acting $k$-linearly on a finite-dimensional $k$-vector space $M$, and $J\subseteq A$ is an ideal. Give $M^\vee=\operatorname{Hom}_k(M,k)$ the action $(a\phi)(m)=\phi(am)$.
>
> **First isomorphism.** Let $q:M\to M/JM$ be the quotient. Precomposition gives an injective $A$-linear map
> $$
> q^\vee:(M/JM)^\vee\longrightarrow M^\vee.
> $$
> Its image is precisely the functionals that vanish on $JM$: they factor uniquely through $q$. For $\phi\in M^\vee$, this condition is equivalent to $\phi(am)=0$ for every $a\in J,m\in M$, or to $a\phi=0$ for every $a\in J$. Hence the image is $M^\vee[J]$ and
> $$
> (M/JM)^\vee\simeq M^\vee[J].
> $$
> **Second isomorphism.** Restriction $r:M^\vee\to M[J]^\vee$ is surjective because a linear functional on a subspace extends by choosing a vector-space complement. It is $A$-linear, and every element of $JM^\vee$ restricts to zero: $(a\phi)(m)=\phi(am)=0$ for $a\in J,m\in M[J]$.
>
> To identify the entire kernel, evaluate the annihilator of $JM^\vee$ inside $M$:
> $$
> \begin{aligned}
> (JM^\vee)^\perp
> &=\{m:\phi(am)=0\text{ for all }a\in J,\phi\in M^\vee\}\\
> &=\{m:am=0\text{ for all }a\in J\}=M[J].
> \end{aligned}
> $$
> Functionals separate points in a vector space, justifying the second equality. In finite dimension taking the annihilator twice recovers a subspace: this follows by extending a basis and counting the complementary dual basis vectors. Therefore $JM^\vee=(M[J])^\perp=\ker r$. Factoring the surjection by its kernel gives
> $$
> M^\vee/JM^\vee\simeq M[J]^\vee.
> $$
> Both maps are natural $A$-module isomorphisms as claimed.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis, Dimension and Dual Bases]]
- [[04 - Linear Algebra and Modules/Concepts/Quotient Modules|Quotient Modules]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Referenced context:** Formula (6.13) and the dual action were checked on printed p. 239 / PDF p. 253. Here $\vee$ is the source's $\wedge$ notation for a vector-space dual.
- **Compatibility hypothesis:** The action of $A$ must be by $k$-linear endomorphisms for the displayed dual action to make sense; this holds for the Hecke algebra application.
- **Dimension boundary:** Finite dimensionality is used for the double-annihilator identity in the second isomorphism.
- **Routing:** Quotients and finite-dimensional duality supply the argument.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
