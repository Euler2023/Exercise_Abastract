---
title: "Exercise LA635: Compatible Complements of Two Fixed Subspaces"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.7, Exercise 5.7.7, printed p. 196, PDF p. 210"
source_refs:
  - "S7/ch-5/sec-7/ex-7"
created: 2026-10-28
---

# Exercise LA635: Compatible Complements of Two Fixed Subspaces

## Problem Statement

> [!question] Original Exercise 5.7.7
> In the proof of Proposition 5.7.7, explain why each $V_i$ has pairwise linearly disjoint subspaces satisfying conditions (5.19).
>
> Those conditions are
> $$
> V_i^{\langle H_i,K_i\rangle}=V_{i1},\qquad V_i^{H_i}=V_{i1}\oplus V_{i2},\qquad V_i^{K_i}=V_{i1}\oplus V_{i3}.
> $$

## Hints

> [!hint]- Hint 1
> First identify the fixed space of the generated group with the intersection of the two fixed spaces.

> [!hint]- Hint 2
> Take complements of the intersection inside each of those two spaces. Prove that the sum of all three chosen spaces is direct.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Set $A=V_i^{H_i}$ and $B=V_i^{K_i}$. A vector is fixed by $\langle H_i,K_i\rangle$ if and only if it is fixed by both $H_i$ and $K_i$: one direction follows from subgroup inclusion, and the other follows because any element of the generated group is a product of elements of the two subgroups and their inverses. Thus $V_i^{\langle H_i,K_i\rangle}=A\cap B$.
>
> Choose a basis of $A\cap B$, extend it to a basis of $A$, and separately extend it to a basis of $B$. Let $V_{i1}=A\cap B$, let $V_{i2}$ be the span of the added basis vectors in $A$, and let $V_{i3}$ be the span of the added basis vectors in $B$. This gives all three equalities (5.19).
>
> More than pairwise zero intersections is useful: their total sum is direct. Indeed, if $u_1+u_2+u_3=0$ with $u_j\in V_{ij}$, then $u_3=-(u_1+u_2)$ belongs to $A$ as well as $B$, hence to $V_{i1}$. Since $V_{i1}\cap V_{i3}=0$, $u_3=0$. Then $u_1+u_2=0$ and the direct decomposition of $A$ forces $u_1=u_2=0$. Therefore $V_{i1}\oplus V_{i2}\oplus V_{i3}$ is a subspace of $V_i$. If a decomposition of all of $V_i$ is wanted, extend its basis once more to obtain a fourth complement $V_{i4}$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.7.7, printed p. 196 / PDF p. 210]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Checked context:** Conditions (5.19) are on printed p.194/PDF p.208. Merely knowing pairwise intersections are zero would not imply a threefold sum is direct; the proof establishes the stronger statement actually needed in the tensor expansion.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
