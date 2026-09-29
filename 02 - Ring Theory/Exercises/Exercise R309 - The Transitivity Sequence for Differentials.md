---
title: "Exercise R309: The Transitivity Sequence for Differentials"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIX, Exercise 7, printed p. 754, PDF p. 769"
created: 2026-09-29
---

# Exercise R309: The Transitivity Sequence for Differentials

## Problem Statement

> [!question] Lang XIX.7
> Let $A\to B$ be a homomorphism of commutative $R$-algebras. Assume universal derivations exist for $A/R$, $B/R$, and $B/A$. Show that there is a natural exact sequence
> $$
> B\otimes_A\Omega^1_{A/R}\longrightarrow\Omega^1_{B/R}\longrightarrow\Omega^1_{B/A}\longrightarrow0.
> $$
> **Source hint:** Prove exactness of
> $$
> 0\longrightarrow\operatorname{Der}_A(B,M)\longrightarrow\operatorname{Der}_R(B,M)\longrightarrow\operatorname{Der}_R(A,M)
> $$
> for every $B$-module $M$. Use that $N'\to N\to N''\to0$ is exact if and only if applying $\operatorname{Hom}_B(-,M)$ gives an exact sequence for every $M$.

## Hints

> [!hint]- Hint 1
> Restriction sends a derivation of $B$ to one of $A$.

> [!hint]- Hint 2
> Quotient $\Omega^1_{B/R}$ by the differentials of elements coming from $A$.

## Solution

> [!success]- Independent derivation
> Write $\varphi:A\to B$. The map
> $$
> u(b\otimes da)=b\,d(\varphi(a))
> $$
> is well defined: $a\mapsto d(\varphi(a))$ is an $R$-derivation to the $A$-module $\Omega^1_{B/R}$. Put $Q=\operatorname{coker}u$. The composition $B\to\Omega^1_{B/R}\to Q$ is an $A$-derivation, because every $d(\varphi(a))$ dies.
>
> An $A$-derivation $D:B\to M$ is an $R$-derivation vanishing on $\varphi(A)$. Its unique representing map $\Omega^1_{B/R}\to M$ kills $\operatorname{im}u$, and hence factors uniquely through $Q$. Conversely such a factorization gives an $A$-derivation. Thus $Q$ has the universal property of $\Omega^1_{B/A}$. The mutually inverse universal maps identify these modules and identify the quotient map with $db\mapsto d_{B/A}b$. This proves exactness and naturality.
>
> The hinted derivation sequence is exact for precisely the same reason: restriction has kernel those derivations that vanish on $A$. No surjectivity of restriction is asserted. For completeness the Hom test follows by writing $Q=\operatorname{coker}(N'\to N)$: exactness for all $M$ identifies $\operatorname{Hom}(N'',M)$ with $\operatorname{Hom}(Q,M)$ by the proposed map $Q\to N''$. Taking $M=Q,N''$ supplies an inverse, so this map is an isomorphism.

## Related Concepts

- [[02 - Ring Theory/Concepts/Universal Derivations and Kahler Differentials]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Hom Functor]]

## Notes

- **Source status:** [S2, Ch. XIX, Ex. 7, printed p. 754, PDF p. 769]. The original page image was checked; the solution above is an independent derivation.
- The first arrow need not be injective. This is a right-exact sequence.
