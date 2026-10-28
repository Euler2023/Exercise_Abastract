---
title: "Exercise Gal211: Cyclotomic Galois Groups over a Rational Function Field"
topic: galois-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - galois-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.6, Exercise 7.6.2, printed p. 294, PDF p. 307"
source_refs:
  - "S7/ch-7/sec-6/ex-2"
created: 2026-10-28
---

# Exercise Gal211: Cyclotomic Galois Groups over a Rational Function Field

## Problem Statement

> [!question] Original Exercise 7.6.2
> Justify the relation $\operatorname{Gal}(\mathbb Q(\mu_N,j)/\mathbb Q(j))\simeq(\mathbb Z/N\mathbb Z)^*$ shown in Figure 7.3.

## Hints

> [!hint]- Hint 1
> Adjoining a transcendental variable does not obstruct coefficientwise extension of a constant-field automorphism.

> [!hint]- Hint 2
> An automorphism is determined by its values on $\zeta_N$ and $j$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Choose a primitive root $\zeta_N$ and put $F=\mathbb Q(\zeta_N)$. Since $j$ is transcendental, $F(j)$ is a rational function field over $F$. Every automorphism $\sigma$ of $F/\mathbb Q$ extends uniquely to an automorphism of $F(j)/\mathbb Q(j)$ by applying $\sigma$ to the coefficients of rational functions and fixing $j$. Conversely an automorphism of $F(j)$ over $\mathbb Q(j)$ must send $\zeta_N$ to another primitive $N$th root, hence into $F$, and is determined by this restriction.
>
> Restriction and coefficientwise extension are inverse homomorphisms:
> $$
> \operatorname{Gal}(F(j)/\mathbb Q(j))
> \simeq\operatorname{Gal}(F/\mathbb Q).
> $$
> The **cyclotomic Galois theorem** identifies the latter with $(\mathbb Z/N\mathbb Z)^*$ by $\sigma_a(\zeta_N)=\zeta_N^a$. Every unit $a$ occurs, and multiplication of exponents agrees with composition.
>
> For a degree check, the cyclotomic polynomial remains irreducible over $\mathbb Q(j)$: a monic factor there would have coefficients algebraic over $\mathbb Q$, as symmetric expressions in roots of unity, and also rational in $j$. Their intersection is $\mathbb Q$ because a nonconstant rational function in a transcendental variable is transcendental. Such a factor would contradict irreducibility over $\mathbb Q$. Thus the extension has degree $\varphi(N)$, matching the automorphisms found.

## Related Concepts

- [[05 - Galois Theory/Concepts/Fundamental Theorem|Fundamental Theorem]]
- [[03 - Field Theory/Concepts/Function Fields|Function Fields]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 294 / PDF p. 307. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Imported input:** The cyclotomic Galois theorem over $\mathbb Q$ is used with its explicit root-of-unity action; the passage to the rational function field is proved here.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
