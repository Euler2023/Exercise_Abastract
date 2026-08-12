---
title: "Exercise LA1: Rank-Nullity Theorem"
topic: linear-algebra
difficulty: intermediate
status: completed
tags:
  - exercise
  - linear-algebra
  - proof
source: Adapted as a proof exercise from Michael Artin, Algebra, 2nd ed., Ch. 4, §4.1, Theorem 4.1.6 (Dimension Formula), printed p. 103, PDF p. 115
created: 2025-01-19
---

# Exercise LA1: Rank-Nullity Theorem

## Problem Statement

> [!question] Exercise
> Let $V$ be a finite-dimensional vector space over a field $F$, let $W$ be any vector space over $F$, and let $T:V\to W$ be a linear transformation. Prove the **Rank–Nullity Theorem** (Artin's **Dimension Formula**):
>
> $$
> \dim V=\dim(\ker T)+\dim(\operatorname{im}T).
> $$

## Hints

> [!hint]- Hint 1
> Start with a basis $\{u_1, \ldots, u_k\}$ for $\ker(T)$ and extend it to a basis of $V$.

> [!hint]- Hint 2
> After extending the kernel basis to $\{u_1,\ldots,u_k,v_1,\ldots,v_r\}$, show that $\{T(v_1),\ldots,T(v_r)\}$ is a basis for $\operatorname{im}T$.

> [!hint]- Hint 3
> Use the linear independence of $\{u_1,\ldots,u_k,v_1,\ldots,v_r\}$ crucially.

## Solution

> [!success]- Solution
> ### Proof
> Let $\dim(\ker T)=k$ and choose a basis $\{u_1,\ldots,u_k\}$ for $\ker T$.
>
> Since $V$ is finite-dimensional, extend this to a basis
>
> $$
> \{u_1,\ldots,u_k,v_1,\ldots,v_r\}
> $$
>
> of $V$. Thus $\dim V=k+r$.
>
> **Claim:** $\{T(v_1),\ldots,T(v_r)\}$ is a basis for $\operatorname{im}T$.
>
> **Spanning.** For any $T(v)\in\operatorname{im}T$, write
>
> $$
> v=\sum_{i=1}^k a_i u_i+\sum_{j=1}^r b_jv_j.
> $$
>
> Since $T(u_i)=0$ for every $i$,
>
> $$
> T(v)=\sum_{j=1}^r b_jT(v_j).
> $$
>
> Hence the displayed images span $\operatorname{im}T$.
>
> **Linear independence.** Suppose
>
> $$
> \sum_{j=1}^r c_jT(v_j)=0.
> $$
>
> Then
>
> $$
> T\left(\sum_{j=1}^r c_jv_j\right)=0,
> $$
>
> so $\sum_{j=1}^r c_jv_j\in\ker T$. Therefore, for some scalars $a_i$,
>
> $$
> \sum_{j=1}^r c_jv_j=\sum_{i=1}^k a_iu_i.
> $$
>
> Rearranging gives a linear relation among the basis vectors of $V$:
>
> $$
> \sum_{i=1}^k(-a_i)u_i+\sum_{j=1}^r c_jv_j=0.
> $$
>
> Their linear independence implies $c_1=\cdots=c_r=0$. Thus the images are linearly independent and hence form a basis of $\operatorname{im}T$. Consequently,
>
> $$
> \dim(\operatorname{im}T)=r=\dim V-\dim(\ker T),
> $$
>
> which is equivalent to
>
> $$
> \dim V=\dim(\ker T)+\dim(\operatorname{im}T).
> $$

## Corollary

> [!abstract] First Isomorphism Theorem for Vector Spaces
> $V/\ker T\cong\operatorname{im}T$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]
- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Vector Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[01 - Group Theory/Concepts/Isomorphism Theorems|Isomorphism Theorems]]

## Notes

- **Source status:** Artin states and proves this result as Theorem 4.1.6, **Dimension Formula** [Michael Artin, *Algebra*, 2nd ed., Ch. 4, §4.1, printed p. 103, PDF p. 115]. The problem above is a proof-exercise adaptation rather than an exercise printed in Artin.
- **Proof status:** The solution is independently written for this vault. It uses the same basis-extension strategy as Artin's proof.
- Only the domain $V$ must be finite-dimensional; no finite-dimensionality assumption on $W$ is needed.
- This is the dimension consequence of the First Isomorphism Theorem for vector spaces. The isomorphism $V/\ker T\cong\operatorname{im}T$ extends to modules over any ring, but a dimension formula requires an appropriate rank or length theory.
