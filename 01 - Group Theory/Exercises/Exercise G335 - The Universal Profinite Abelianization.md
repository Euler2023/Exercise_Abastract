---
title: 'Exercise G335: The Universal Profinite Abelianization'
topic: group-theory
difficulty: advanced
status: not-started
tags:
- exercise
- group-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §1, Exercise 5, printed p. 265, PDF p. 284
source_refs:
- S4/ch-IV/sec-1/ex-5
created: '2026-10-23'
---

# Exercise G335: The Universal Profinite Abelianization

## Problem Statement

> [!question] Neukirch IV.1.5
> Let $G'$ be the closure of the commutator subgroup of a profinite group, and $G^{ab}=G/G'$. Show that every continuous homomorphism $G\to A$ into an abelian profinite group factorizes through $G^{ab}$.

## Hints

> [!hint]- Hint 1
> Any homomorphism into an abelian group kills every commutator. Continuity makes its kernel contain the closure of the commutator subgroup as well.

> [!hint]- Hint 2
> The universal property of the quotient topology gives continuity of the factor map, and surjectivity of the quotient map gives uniqueness.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Let $D=[G,G]$ be the abstract commutator subgroup and put $G'=\overline D$. This is a closed normal subgroup, so the preceding exercise makes $G^{ab}=G/G'$ profinite. The quotient $G/G'$ is abelian because all commutators become the identity.
>
> Let $f:G\to A$ be continuous, with $A$ abelian. For every $x,y\in G$, $f(xyx^{-1}y^{-1})=1$, so $D\subseteq\ker f$. Since $A$ is Hausdorff, $\{1\}$ is closed, making $\ker f$ closed. Thus $G'\subseteq\ker f$. The unique abstract factor homomorphism is therefore
> $$
> \bar f:G/G'\longrightarrow A,\qquad gG'\longmapsto f(g).
> $$
> It is well defined. If $U\subseteq A$ is open, then $q^{-1}(\bar f^{-1}(U))=f^{-1}(U)$ is open. By the definition of the quotient topology, $\bar f^{-1}(U)$ is open, so $\bar f$ is continuous. Surjectivity of $q$ forces every factor map satisfying $f=\bar f q$ to have this formula, proving uniqueness.

## Related Concepts

- [[01 - Group Theory/Concepts/Quotient Groups|Commutator Subgroup]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §1, Exercise 5, printed p. 265, PDF p. 284]. An independent proof using kernels and the quotient topology.
- **Topology:** Taking the closure of the commutator subgroup preserves a profinite, Hausdorff quotient; the abstract commutator subgroup alone need not have this topological property.
