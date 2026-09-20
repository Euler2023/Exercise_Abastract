---
title: "Exercise R279: Dimension and Catenarity of Affine Domains over a Field"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - commutative-algebra
  - dimension-theory
  - catenarity
  - noether-normalization
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IX, Exercises, Exercise 18, printed p. 412, PDF p. 427"
created: 2026-09-15
---

# Exercise R279: Dimension and Catenarity of Affine Domains over a Field

## Problem Statement

> [!question]
> Let $k$ be a field and let $k[x_1, \ldots, x_n] = A \subset K$ be a finitely generated subring of some extension field $K$. Assume that $k(x_1, \ldots, x_n)$ has transcendence degree $r$. Show that every maximal chain of prime ideals
> $$
> A \supset P_1 \supset P_2 \supset \cdots \supset P_m \supset \{0\},
> $$
> with $P_1 \neq A$, $P_i \neq P_{i+1}$, $P_m \neq \{0\}$, must have $m = r$.

## Hints

> [!hint]- Hint 1
> A maximal chain starts at a maximal ideal $P_1$ and is saturated down to $(0)$. Distinguish two tasks: compute $\operatorname{ht}(P_1)$, and prove that all saturated chains with these fixed endpoints have that length.

> [!hint]- Hint 2
> Use the external dimension-theory inputs stated in [[02 - Ring Theory/Concepts/Krull Dimension and Catenarity|Krull Dimension and Catenarity]]. A field is universally catenary, and the dimension formula for $k\subset A$ gives
> $$
> \operatorname{ht}(P)+\operatorname{tr.deg}_k\operatorname{Frac}(A/P)=r.
> $$
> What does Zariski's lemma say about the residue field when $P$ is maximal?

## Solution

> [!success]- Solution
> ### Approach and proof inputs
> We use universal catenarity of the base field and the dimension formula for finite-type inclusions of domains. Their exact hypotheses and external sources are stated in [[02 - Ring Theory/Concepts/Krull Dimension and Catenarity#External dimension-theory inputs|External dimension-theory inputs]]: [Stacks, Tag 00NM](https://stacks.math.columbia.edu/tag/00NM) and [Tag 02IJ](https://stacks.math.columbia.edu/tag/02IJ). These inputs are not proved in this note.
>
> ### Proof
> Set $F=\operatorname{Frac}(A)$, so $\operatorname{tr.deg}_k F=r$. The field $k$ is Noetherian and Cohen–Macaulay: its only localization is a zero-dimensional field. Hence the first external input makes $k$ universally catenary. Because $A$ is a finite-type $k$-algebra, it follows that $A$ is catenary.
>
> For any prime $P$ of $A$, apply the dimension formula to the inclusion of domains $k\subset A$. Its contraction to $k$ is $(0)$, of height $0$, and its residue field is $\kappa(P)=\operatorname{Frac}(A/P)$. Thus
> $$
> \operatorname{ht}(P)=r-\operatorname{tr.deg}_k\kappa(P).
> $$
> All hypotheses have been checked: the base is Noetherian and universally catenary, the inclusion is injective, and $A$ is a finite-type domain.
>
> Let the chain in the question be maximal. Its top prime $P_1$ is a maximal ideal; otherwise a strictly larger proper prime could be inserted. The field $A/P_1$ is a finitely generated $k$-algebra. By Zariski's lemma [S2, Ch. IX, Corollary 1.2, printed p. 379, PDF p. 394], it is algebraic over $k$, so the formula gives
> $$
> \operatorname{ht}(P_1)=r.
> $$
>
> Maximality of the displayed chain also says that no prime can be inserted between adjacent terms. Its prime-to-prime length, from $(0)$ to $P_1$, is $m$; the proper containment $P_1\subsetneq A$ does not count as a prime-to-prime step. Since $A$ is a catenary domain, all saturated chains from $(0)$ to this particular $P_1$ have the same length. That length equals $\operatorname{ht}(P_1)$: the finite integer height is attained by a chain, which must already be saturated. Consequently
> $$
> m=\operatorname{ht}(P_1)=r.
> $$
> When $r=0$, $A$ is a field by the same finite-type algebraic argument, and the corresponding prime chain has length $0$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Krull Dimension and Catenarity|Krull Dimension and Catenarity]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[03 - Field Theory/Concepts/Transcendence Bases and Transcendence Degree|Transcendence Bases and Transcendence Degree]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]

## Notes

- **Independent derivation with external inputs:** Lang poses the exercise at [S2, Ch. IX, Exercise 18, printed p. 412, PDF p. 427]. The proof above applies the explicitly cited universal-catenarity and dimension-formula theorems; it is not a claim that Lang supplies this solution.
- **Why Going-Down alone is insufficient:** Given primes $P_{i+1}\subset P_i$, Going-Down from $P_i$ can lift a smaller contracted prime, but it does not guarantee that the resulting prime contains the already specified $P_{i+1}$. One cannot use that assertion to prove a contracted chain saturated.
- **Fixed endpoints versus equal maximal heights:** Catenarity controls chains with fixed endpoints. The calculation of $\operatorname{ht}(P_1)=r$ is the separate step that makes the answer independent of the chosen maximal ideal.
