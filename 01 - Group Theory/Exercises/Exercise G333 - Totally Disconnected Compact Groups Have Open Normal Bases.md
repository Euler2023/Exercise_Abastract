---
title: 'Exercise G333: Totally Disconnected Compact Groups Have Open Normal Bases'
topic: group-theory
difficulty: advanced
status: not-started
tags:
- exercise
- group-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §1, Exercise 3, printed p. 265, PDF p. 284
source_refs:
- S4/ch-IV/sec-1/ex-3
created: '2026-10-23'
---

# Exercise G333: Totally Disconnected Compact Groups Have Open Normal Bases

## Problem Statement

> [!question] Neukirch IV.1.3
> A compact Hausdorff group is totally disconnected if and only if its neutral element admits a basis of neighbourhoods consisting only of normal subgroups.

## Hints

> [!hint]- Hint 1
> First show that in a compact Hausdorff space a connected component is the intersection of its clopen neighborhoods. Total disconnectedness then gives a clopen basis.

> [!hint]- Hint 2
> If $U$ is a clopen set containing $1$, its left-translation stabilizer $H=\{g:gU=U\}$ is an open subgroup contained in $U$.

> [!hint]- Hint 3
> An open subgroup has finite index, and its normal core is the intersection of finitely many conjugate open subgroups.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> **1. Obtaining a clopen basis from total disconnectedness.** For a compact Hausdorff space $X$ and $x\in X$, let $Q$ be the intersection of all clopen sets containing $x$. To prove that $Q$ is connected, suppose $Q=C\sqcup D$ is a separation into two nonempty closed subsets, with $x\in C$. By normality of a compact Hausdorff space, choose disjoint open sets $U,V$ containing $C,D$, respectively. The set $X\setminus(U\cup V)$ is compact. Each of its points lies outside $Q$, so some clopen set containing $x$ excludes that point. Intersecting finitely many such sets gives a clopen set $W$ with $Q\subseteq W\subseteq U\cup V$. Then $W\cap U$ is a clopen set containing $x$ but excluding $D\subseteq Q$, a contradiction. Thus $Q$ is connected and is exactly the connected component of $x$. If $X$ is totally disconnected, then $Q=\{x\}$. Applying the same finite-intersection argument to the compact complement of any neighborhood produces a clopen set containing $x$ and contained in that neighborhood.
>
> **2. Producing an open subgroup from a clopen neighborhood.** In the group $G$, take a clopen set $U$ with $1\in U\subseteq O$. Continuity of multiplication and compactness of $U$ give a symmetric open neighborhood $V$ of $1$ such that $VU\subseteq U$: for each $u\in U$, choose $V_uW_u\subseteq U$, cover $U$ by finitely many $W_u$, and take a symmetric neighborhood contained in the intersection of the corresponding $V_u$. For $v\in V$, both $vU\subseteq U$ and $v^{-1}U\subseteq U$ hold, so $vU=U$.
>
> Put $H=\{g:gU=U\}$. This is a subgroup containing $V$, hence it is open, and $1\in U$ implies $H\subseteq U$. Its open cosets cover the compact group, so finitely many suffice and $[G:H]<\infty$. The core
> $$
> N=\bigcap_{g\in G}gHg^{-1}
> $$
> requires an intersection over only finitely many representatives of $G/H$. It is therefore an open normal subgroup with $N\subseteq O$. Every $O$ contains such an $N$, giving the required neighborhood basis of normal subgroups.
>
> **3. The converse.** Suppose there is a neighborhood basis of normal subgroups. Each basic subgroup contains an open neighborhood and is therefore open. Its cosets are open, so the subgroup is also closed. The connected component of $1$ lies in every clopen basic subgroup, and the Hausdorff property makes their intersection $\{1\}$. Translation shows that every connected component is a singleton, so $G$ is totally disconnected.

## Related Concepts

- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §1, Exercise 3, printed p. 265, PDF p. 284]. An independent proof, including the often omitted constructions of a clopen basis and open subgroups. The only topological inputs are normality of compact Hausdorff spaces and the finite-subcover property of compactness.
- **Topology:** A neighborhood subgroup need not be declared open in advance: a subgroup containing an open neighborhood of $1$ is a union of translates of that neighborhood and is automatically open.
