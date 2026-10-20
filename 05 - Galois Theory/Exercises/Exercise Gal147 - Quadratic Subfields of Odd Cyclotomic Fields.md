---
title: "Exercise Gal147: Quadratic Subfields of Odd Cyclotomic Fields"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §10, Exercise 4, printed p. 65, PDF p. 84"
created: 2026-10-20
---

# Exercise Gal147: Quadratic Subfields of Odd Cyclotomic Fields

## Problem Statement

> [!question] Neukirch I.10.4
> Describe the quadratic subfields of $\mathbb Q(\zeta_n)/\mathbb Q$, in the case where $n$ is odd.

## Hints

> [!hint]- Hint 1: Find visible quadratic fields
> Write $n=\prod_{i=1}^r p_i^{e_i}$ with distinct odd primes and put $p_i^*=(-1)^{(p_i-1)/2}p_i$. A quadratic Gauss sum puts $\sqrt{p_i^*}$ in $\mathbb Q(\zeta_{p_i})\subseteq\mathbb Q(\zeta_n)$.

> [!hint]- Hint 2: Multiply square classes
> For each nonempty subset $I\subseteq\{1,\ldots,r\}$ consider $\mathbb Q(\sqrt{\prod_{i\in I}p_i^*})$. Prove these fields are pairwise distinct by comparing their rational square classes.

> [!hint]- Hint 3: Count all index-two fixing subgroups
> A homomorphism $(\mathbb Z/p_i^{e_i}\mathbb Z)^\times\to\{\pm1\}$ kills the odd-order kernel of reduction modulo $p_i$. There are exactly two such characters. Combine the factors by CRT and use Galois correspondence.

## Solution

> [!success]- Independent derivation
> Write $n=\prod_{i=1}^r p_i^{e_i}$ with distinct odd primes. For every nonempty subset $I$ put
> $$
> D_I=\prod_{i\in I}p_i^*,\qquad
> p_i^*=(-1)^{(p_i-1)/2}p_i.
> $$
> We claim that the complete list is
> $$
> \mathbb Q(\sqrt{D_I}),\qquad
> \varnothing\ne I\subseteq\{1,\ldots,r\}.
> $$
> When $n=1$, the list is empty and the cyclotomic field is $\mathbb Q$.
>
> **1. Construct and distinguish the listed fields.** The Gauss-sum calculation in [[03 - Field Theory/Exercises/Exercise F127 - Every Quadratic Number Field Lies in a Cyclotomic Field|Exercise I.10.3]] gives $\tau_i\in\mathbb Q(\zeta_{p_i})$ with $\tau_i^2=p_i^*$. Because $p_i\mid n$, all these elements lie in $E=\mathbb Q(\zeta_n)$. Their product for $i\in I$ has square $D_I$, so the proposed field is contained in $E$.
>
> Each $D_I$ is a signed squarefree integer of absolute value greater than $1$, hence not a rational square. These fields are quadratic. If $\mathbb Q(\sqrt D)=\mathbb Q(\sqrt{D'})$ for nonsquare rationals $D,D'$, write $\sqrt{D'}=a+b\sqrt D$ with $a,b\in\mathbb Q$. Squaring and comparing coefficients gives $2ab=0$. Here $b\ne0$, so $a=0$ and $D'/D=b^2$. For different subsets $I,J$, the ratio $D_I/D_J$ has odd exponent at a prime in their symmetric difference; a rational square has even exponent at every prime. Thus all $2^r-1$ listed fields are distinct.
>
> **2. Count every possible quadratic subfield.** The cyclotomic Galois theorem and CRT identify
> $$
> G=\operatorname{Gal}(E/\mathbb Q)
> \cong\prod_{i=1}^r(\mathbb Z/p_i^{e_i}\mathbb Z)^\times.
> $$
> Quadratic subfields correspond to index-two subgroups of $G$, equivalently kernels of nontrivial characters $G\to\{\pm1\}$. Each index-two subgroup gives precisely one such character, since a group of order two has only one automorphism.
>
> Reduction of the $i$th factor modulo $p_i$ is onto $\mathbb F_{p_i}^\times$ and has kernel of order $p_i^{e_i-1}$, an odd number. A homomorphism from this kernel to a group of order two is trivial, by Lagrange's theorem. Every sign character on that factor therefore descends to the cyclic group $\mathbb F_{p_i}^\times$, of even order $p_i-1$. A generator may map to either $1$ or $-1$, giving exactly two characters.
>
> A character on the finite product is uniquely the product of its restrictions to the factors. There are exactly $2^r$ characters of $G$, one trivial, and hence exactly $2^r-1$ quadratic subfields. The same number of distinct fields was already constructed, proving the list exhaustive.

## Related Concepts

- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[05 - Galois Theory/Concepts/Fundamental Theorem|Fundamental Theorem of Galois Theory]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]

## Notes

- **Source verification:** The complete exercise and any printed hint were visually checked at [S4, Ch. I, §10, Exercise 4, printed p. 65, PDF p. 84]. No source figure is required. The solution is an independent derivation.
- **Inputs:** The cyclotomic Galois theorem, CRT, cyclicity of finite-field multiplicative groups, and finite Galois correspondence are imported. The odd-prime Gauss sum is independently proved in Exercise F127. The square-class distinction and the character count are proved here.
- **Scope:** Only primes dividing the odd integer $n$ occur in the displayed radicands. The exponents $e_i$ create no new quadratic characters because their reduction kernels have odd order. The case $n=1$ has no quadratic subfield.
- **Routing:** Exhaustiveness is established through index-two fixing subgroups and their characters, so Galois Theory is primary.
