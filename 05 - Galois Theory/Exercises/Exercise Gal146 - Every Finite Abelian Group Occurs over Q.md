---
title: "Exercise Gal146: Every Finite Abelian Group Occurs over Q"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §10, Exercise 2, printed p. 65, PDF p. 84"
created: 2026-10-20
---

# Exercise Gal146: Every Finite Abelian Group Occurs over Q

## Problem Statement

> [!question] Neukirch I.10.2
> For every finite abelian group $A$ there exists a Galois extension $L/\mathbb Q$ with Galois group $G(L/\mathbb Q)\cong A$.
>
> **Printed hint:** Use exercise 1.

## Hints

> [!hint]- Hint 1: Decompose the desired group
> Write $A\cong\prod_{i=1}^t C_{d_i}$ with $d_i\ge2$. Exercise I.10.1 allows a distinct prime $q_i\equiv1\pmod{d_i}$ for each factor.

> [!hint]- Hint 2: Use different prime conductors
> For $N=\prod_iq_i$, the Chinese remainder theorem gives $(\mathbb Z/N\mathbb Z)^\times\cong\prod_i(\mathbb Z/q_i\mathbb Z)^\times$. Each factor is cyclic and has a quotient of order $d_i$.

> [!hint]- Hint 3: Take a fixed field of the combined kernel
> Construct a surjection $\operatorname{Gal}(\mathbb Q(\zeta_N)/\mathbb Q)\twoheadrightarrow A$. Its kernel is normal. Apply the finite Galois correspondence to its fixed field.

## Solution

> [!success]- Independent derivation
> If $A$ is trivial, take $L=\mathbb Q$. Otherwise the structure theorem for finite abelian groups gives
> $$
> A\cong C_{d_1}\times\cdots\times C_{d_t},\qquad d_i\ge2.
> $$
> By [[02 - Ring Theory/Exercises/Exercise R361 - Infinitely Many Primes Congruent to One Modulo n|Exercise I.10.1]], there are infinitely many primes $q\equiv1\pmod{d_i}$ for each $i$. Choose such primes $q_1,\ldots,q_t$ successively, excluding the previously chosen ones, and put $N=q_1\cdots q_t$.
>
> The cyclotomic Galois theorem and the Chinese remainder theorem give
> $$
> G:=\operatorname{Gal}(E/\mathbb Q)
> \cong(\mathbb Z/N\mathbb Z)^\times
> \cong\prod_{i=1}^t(\mathbb Z/q_i\mathbb Z)^\times,
> \qquad E=\mathbb Q(\zeta_N).
> $$
> The finite multiplicative group $(\mathbb Z/q_i\mathbb Z)^\times$ is cyclic of order $q_i-1$. Choose a generator $g_i$. Since $d_i\mid q_i-1$, the map
> $$
> g_i^a\longmapsto a\bmod d_i
> $$
> is a well-defined surjection onto $C_{d_i}=\mathbb Z/d_i\mathbb Z$. It is well-defined because changing $a$ by $q_i-1$ does not change its residue modulo $d_i$. Its kernel is $H_i=\langle g_i^{d_i}\rangle$.
>
> Take the product of these maps to obtain a surjection $G\twoheadrightarrow\prod_iC_{d_i}\cong A$, with kernel corresponding under the displayed isomorphism to $H=\prod_iH_i$. Since $G$ is abelian, $H$ is normal. Let $L=E^H$. The finite Galois correspondence now yields
> $$
> L/\mathbb Q\text{ is Galois},\qquad
> \operatorname{Gal}(L/\mathbb Q)\cong G/H\cong A.
> $$
> This realizes the whole product, including noncyclic finite abelian groups.

## Related Concepts

- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[05 - Galois Theory/Concepts/Fundamental Theorem|Fundamental Theorem of Galois Theory]]
- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Chinese Remainder Theorem]]

## Notes

- **Source verification:** The complete exercise and any printed hint were visually checked at [S4, Ch. I, §10, Exercise 2, printed p. 65, PDF p. 84]. No source figure is required. The solution is an independent derivation.
- **Proof inputs:** The finite abelian-group structure theorem, the cyclotomic Galois isomorphism $\operatorname{Gal}(\mathbb Q(\zeta_N)/\mathbb Q)\cong(\mathbb Z/N\mathbb Z)^\times$, cyclicity of finite-field multiplicative groups, CRT, and the finite Galois correspondence are named imported results. The chosen quotient maps and normal fixing subgroup are constructed explicitly.
- **Method boundary:** Distinct primes are necessary in this construction to obtain independent CRT factors. A single cyclic cyclotomic Galois group could realize only cyclic quotients.
- **Routing:** The decisive step constructs a normal subgroup with a prescribed quotient and takes its fixed field, so Galois Theory is primary.
