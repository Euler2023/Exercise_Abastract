---
title: "Exercise LA634: Kernels of Products of Commuting Projections"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.7, Exercise 5.7.4, printed p. 195, PDF p. 209"
source_refs:
  - "S7/ch-5/sec-7/ex-4"
created: 2026-10-28
---

# Exercise LA634: Kernels of Products of Commuting Projections

## Problem Statement

> [!question] Original Exercise 5.7.4
> State and prove the facts about commuting projections needed in the calculation $\ker(\pi)=\sum_{p\mid N}\operatorname{im}(\pi_p)$. (A hint for this exercise is at the end of the book.)
>
> Here $\pi=\prod_{p\mid N}(I-\pi_p)$, and each $\pi_p$ retains the terms in the $q_N$ expansion whose indices are divisible by $p$.

## Hints

> [!hint]- Hint 1
> For an idempotent $P$, prove $\ker(I-P)=\operatorname{im}P$.

> [!hint]- Hint 2
> Expand $I-\prod_{j=1}^r(I-P_j)$ by a telescoping identity.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Let $V$ be any vector space and $P_1,\ldots,P_r$ commuting idempotents. First, $\ker(I-P_j)=\operatorname{im}P_j$: a vector fixed by $P_j$ is its own image, and an image $P_jv$ is fixed because $P_j^2=P_j$. Set $Q=\prod_{j=1}^r(I-P_j)$. Commutativity and idempotence give $Q^2=Q$, and $QP_j=0$ for every $j$. Consequently $\sum_j\operatorname{im}P_j\subset\ker Q$.
>
> The telescoping identity, with the empty product equal to $I$, is
> $$
> I-Q=\sum_{j=1}^r\left(\prod_{i<j}(I-P_i)\right)P_j.
> $$
> It follows by subtracting consecutive partial products. Every term has image in $\operatorname{im}P_j$, because the preceding factors commute with $P_j$. If $Qv=0$, then $v=(I-Q)v$ belongs to $\sum_j\operatorname{im}P_j$. Thus
> $$
> \ker\prod_j(I-P_j)=\sum_j\ker(I-P_j)=\sum_j\operatorname{im}P_j.
> $$
> For the application, the coefficient computation of Exercise 5.7.3 shows $\pi_p^2=\pi_p$ and $\pi_p\pi_q=\pi_q\pi_p$: the two compositions retain precisely the indices divisible by both primes. The preceding identity proves the required kernel formula. If $N=1$, there are no primes: $\pi=I$, both kernel and empty sum are $0$. No inner product or orthogonality of projections is needed.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.7.4, printed p. 195 / PDF p. 209]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Checked context:** The kernel calculation is on printed p.193/PDF p.207; the appendix hint on printed p.423/PDF p.434 suggests first considering two commuting projections.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
