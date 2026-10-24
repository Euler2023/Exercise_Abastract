---
title: 'Exercise Gal199: Cyclotomic Norms and Rational Ray Classes'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §4, Exercise 2, printed p. 385, PDF p. 404
source_refs:
- S4/ch-VI/sec-4/ex-2
created: '2026-10-23'
---

# Exercise Gal199: Cyclotomic Norms and Rational Ray Classes

## Problem Statement

> [!question] Neukirch VI.4.2
> Let $\zeta$ be a primitive $m$-th root of unity. Show that the norm group $N_{\mathbb Q(\zeta)|\mathbb Q}C_{\mathbb Q}$ equals the ray class group mod $\mathfrak m=(m)$ in $C_{\mathbb Q}$.

> [!warning] Source issue / proof scope
> The printed norm has the wrong domain subscript; "ray class group in the idele class group" denotes its congruence subgroup here.

## Hints

> [!hint]- Hint
> Identify the rational ray class quotient with $(\mathbb Z/m\mathbb Z)^\times$ and compare its action on $\zeta$.

> [!hint]- Stronger hint
> Frobenius at ell sends zeta to zeta^ell, giving the same quotient as the positive rational ray congruence subgroup.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> By VI.(1.10) of the book (printed p.366/PDF385), we have $C_\mathbb Q/C_\mathbb Q^{(m)}\cong(\mathbb Z/m\mathbb Z)^\times$. In the ideal formulation, the positive generator $a$ of a principal ideal coprime to $m$ is sent to $a\bmod m$.
> On the other hand, Frobenius in the cyclotomic extension acts at a prime $\ell\nmid m$ by $\zeta\mapsto\zeta^\ell$. Thus global reciprocity on this ray quotient is precisely
> $$
> (\mathbb Z/m\mathbb Z)^\times
> \longrightarrow\operatorname{Gal}(\mathbb Q(\zeta)/\mathbb Q),
> \quad \bar a\longmapsto(\zeta\mapsto\zeta^a),
> $$
> This is an isomorphism. Its kernel in $C_\mathbb Q$ is exactly $C_\mathbb Q^{(m)}$. The norm-kernel property of global reciprocity gives the desired equality. Neukirch's modulus $(m)$ already incorporates positivity at the real place, so the sign condition at infinity is included.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

The statement was checked against the original page images. [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §4, Exercise 2, printed p.385, PDF p.404]. The solution is independently derived.

- **Source issue (domain and terminology):** The original image at printed p.385/PDF404 does say $N_{\mathbb Q(\zeta)|\mathbb Q}C_{\mathbb Q}$; the domain of the norm should be $C_{\mathbb Q(\zeta)}$. Here the phrase "ray class group ... in $C_{\mathbb Q}$" must mean the corresponding ray congruence **subgroup**. The solution computes this subgroup rather than treating a finite quotient group as its own kernel.
