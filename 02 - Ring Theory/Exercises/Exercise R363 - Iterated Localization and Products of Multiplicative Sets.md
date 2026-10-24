---
title: "Exercise R363: Iterated Localization and Products of Multiplicative Sets"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §11, Exercise 4, printed p. 72, PDF p. 91"
created: 2026-10-20
---

# Exercise R363: Iterated Localization and Products of Multiplicative Sets

## Problem Statement

> [!question] Neukirch I.11.4
> Let $S$ and $T$ be two multiplicative subsets of $A$, and $T^*$ the image of $T$ in $A_S$. Then one has $A_{ST}\cong(A_S)_{T^*}$.

## Hints

> [!hint]- Hint 1: Describe the products being inverted
> Put $ST=\{st:s\in S,t\in T\}$, with $1$ in both sets. Inverting every $st$ is equivalent to inverting every element of both $S$ and $T$.

> [!hint]- Hint 2: Construct maps in both directions
> Use the universal mapping property of localization to map $A_{ST}$ into $(A_S)_{T^*}$ and back. The fraction $(a/s)/(t/1)$ should map to $a/(st)$.

> [!hint]- Hint 3: Check the zero-ring boundary
> In a ring with zero divisors it is possible that $0\in ST$ although $0\notin S,T$. Then one of the images in $T^*$ is zero, and both sides are zero rings. State the localization convention that permits this case.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> We use commutative rings with identity, $1\in S,T$, and the fraction construction of localization. To cover all printed multiplicative subsets, we also allow a multiplicative set containing $0$: its localization is the zero ring. The visible convention below explains why this boundary is needed.
>
> **1. Construct the canonical maps.** Let $B=A_{ST}$ and $C=(A_S)_{T^*}$. The canonical map $A\to C$ sends all elements of $S$ to units at the first stage and all elements of $T$ to units at the second. Thus it sends every $st\in ST$ to a unit. The universal property gives a map
> $$
> \phi:B\longrightarrow C.
> $$
> Conversely, $A\to B$ inverts $S$ because $s=s\cdot1\in ST$. It therefore induces $A_S\to B$. This induced map also inverts the images of $T$, since $t=1\cdot t\in ST$. A second application of the universal property gives
> $$
> \psi:C\longrightarrow B,\qquad
> \psi\!\left(\frac{a/s}{t/1}\right)=\frac{a}{st}.
> $$
> The universal property is proved directly, including representative independence, in [[02 - Ring Theory/Exercises/Exercise R364 - The Universal Mapping Property of Localization|Exercise I.11.5]].
>
> **2. Verify the maps are inverse.** Both $\psi\phi$ and the identity of $B$ restrict to the canonical map on $A$. Uniqueness in the localization property implies $\psi\phi=\operatorname{id}_B$. Likewise $\phi\psi$ fixes the image of $A$, hence every fraction $a/s$ and its further denominator inverses. Every element of $C$ is $(a/s)/(t/1)$, so $\phi\psi=\operatorname{id}_C$. This proves the canonical isomorphism.
>
> **3. Include annihilating denominators.** If $0=st\in ST$, the images of both $s$ and $t$ in $B$ are units, so their product $0$ is a unit and $1=0$ there. In $A_S$, $s$ is already a unit and $st=0$ forces $t/1=0$. The second localization therefore also inverts zero and is the zero ring. Thus the same conclusion remains valid.
>
> For a concrete instance take $A=k\times k$, $e=(1,0)$ and $f=(0,1)$, with $S=\{1,e\}$ and $T=\{1,f\}$. Neither set contains zero, but $ef=0$. Localizing first at $e$ leaves the first factor, where $f$ vanishes; localizing at its image then gives the zero ring, agreeing with $A_{ST}$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]

## Notes

- **Source verification:** The complete exercise and any printed hint were visually checked at [S4, Ch. I, §11, Exercise 4, printed p. 72, PDF p. 91]. No source figure is required. The solution is an independent derivation.
- **Source convention:** Exercise I.11.1 assumes $0\notin S$. In the zero-divisor setting, that restriction for each of $S,T$ does not imply $0\notin ST$, as the example proves. The printed isomorphism is interpreted using the general zero-ring localization convention. If one excludes that convention, the extra hypothesis $0\notin ST$ is required. The printed statement itself is retained above.
- **Proof scope:** The universal property is an elementary fraction consequence proved in Exercise R364, not an imported Dedekind-domain result. No domain, finite-generation, or injectivity hypothesis is used.
- **Routing:** The objects and maps are localized rings and their universal factorizations, so Ring Theory is primary.
