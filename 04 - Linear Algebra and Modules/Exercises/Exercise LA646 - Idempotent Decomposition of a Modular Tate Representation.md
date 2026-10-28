---
title: "Exercise LA646: Idempotent Decomposition of a Modular Tate Representation"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 9, Section 9.5, Exercise 9.5.2, printed p. 402, PDF p. 414"
source_refs:
  - "S7/ch-9/sec-5/ex-2"
created: 2026-10-28
---

# Exercise LA646: Idempotent Decomposition of a Modular Tate Representation

## Problem Statement

> [!question] Original Exercise 9.5.2
> (a) Let $i:K_f\otimes_{\mathbb Q}\mathbb Q_\ell\cong\prod_{\lambda\mid\ell}K_{f,\lambda}$ be (9.10). Let $e_\lambda$ map to the tuple with $1$ in the $\lambda$th position and zero elsewhere, and put $V_\lambda(f)=e_\lambda V_\ell(A_f)$. Show each is two-dimensional over $K_{f,\lambda}$ and $V_\ell(A_f)=\bigoplus_{\lambda\mid\ell}V_\lambda(f)$. Show each is Galois invariant and that the basis $e_\lambda B$, from the section's basis $B$ over $K_f\otimes\mathbb Q_\ell$, yields $\rho_{f,\lambda}$. (Hints for this exercise are at the end of the book.)
>
> (b) Explain why continuity of $V_\lambda(f)\times G_{\mathbb Q}\to V_\lambda(f)$ is independent of whether its vector-space topology is taken over $K_{f,\lambda}$ or $\mathbb Q_\ell$, and why the action is continuous in the latter topology.
>
> (c) Use (a) to show $\ker\rho_{A_f,\ell}\subseteq\ker\rho_{f,\lambda}$ for every $\lambda$.

## Hints

> [!hint]- Hint 1
> The orthogonal idempotents sum to one; apply them to a free rank-two module.

> [!hint]- Hint 2
> The coefficient-ring action commutes with Galois and all finite-dimensional linear coordinate changes are continuous.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Put $A=K_f\otimes\mathbb Q_\ell$ and $V=V_\ell(A_f)\cong A^2$, using Lemma 9.5.3. The idempotents satisfy $e_\lambda^2=e_\lambda$, $e_\lambda e_\mu=0$ for $\lambda\ne\mu$, and $\sum e_\lambda=1$. Thus $v=\sum e_\lambda v$ for every $v$, and applying any $e_\mu$ to a zero sum proves the sum is direct. Since $e_\lambda A\cong K_{f,\lambda}$, applying $e_\lambda$ to a basis $B=(b_1,b_2)$ gives a basis $(e_\lambda b_1,e_\lambda b_2)$ of the two-dimensional $K_{f,\lambda}$-space $e_\lambda V$. Galois commutes with $A$, so $(e_\lambda v)^\sigma=e_\lambda v^\sigma$. This proves invariance, and applying $e_\lambda$ to the two-by-two coefficient matrix in $B$ gives its $\lambda$th projection, exactly $\rho_{f,\lambda}$.
>
> For (b), choose a $\mathbb Q_\ell$-basis of $K_{f,\lambda}$. It identifies its usual field topology with a finite product of copies of $\mathbb Q_\ell$. Combining it with the two-vector basis of $V_\lambda$ identifies both proposed topologies with the same finite product. This is also the subspace topology from $V$: the linear projection $e_\lambda$ and its inclusion are continuous in finite-dimensional $\mathbb Q_\ell$ coordinates. Restricting the continuous action on $V\times G_{\mathbb Q}$ to the invariant subspace proves continuity of the action there, and Exercise 9.3.7 converts it to continuity of the matrix representation.
>
> Finally an element acting as identity on $V$ acts as identity on each summand. Hence it belongs to every $\ker\rho_{f,\lambda}$, proving (c). In fact the direct sum gives the stronger equality $\ker\rho_{A_f,\ell}=\bigcap_{\lambda\mid\ell}\ker\rho_{f,\lambda}$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Nilpotent and Idempotent Elements|Nilpotent and Idempotent Elements]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Imported input:** Lemma 9.5.3 rank-two freeness and the local-field product decomposition (9.10). The direct-sum, topology and kernel assertions are derived explicitly.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
