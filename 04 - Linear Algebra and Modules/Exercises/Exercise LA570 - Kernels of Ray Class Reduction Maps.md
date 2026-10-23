---
title: 'Exercise LA570: Kernels of Ray Class Reduction Maps'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 14, printed p. 368, PDF p. 387
source_refs:
- S4/ch-VI/sec-1/ex-14
created: '2026-10-23'
---

# Exercise LA570: Kernels of Ray Class Reduction Maps

## Problem Statement

> [!question] Neukirch VI.1.14
> Compute the kernels of $Cl_K^{\mathfrak m}\to Cl_K$ and $Cl_K^{\mathfrak m}\to Cl_K^{\mathfrak m'}$ for $\mathfrak m'\mid\mathfrak m$.

## Hints

> [!hint]- Hint
> For the ordinary class group keep both finite residues and signs. For a smaller modulus use the kernel of the residue reduction map and divide by the appropriate positive units.

> [!hint]- Stronger hint
> The first kernel retains both residue units and real signs modulo global units; the second is ker(rho) modulo positive units congruent to 1 at the smaller modulus.

## Solution

> [!success]- Independent derivation
> Let $r_1$ be the number of real places, and set $E=\mathcal O_K^\times$ and $E_{\mathfrak m'}^+=\{\epsilon\in E:\epsilon>0,\ \epsilon\equiv1\bmod\mathfrak m'\}$. The first kernel is
> $$
> \ker(\mathrm{Cl}^\mathfrak m\to\mathrm{Cl})
> \cong
> \frac{(\mathcal O_K/\mathfrak m)^\times\times\{\pm1\}^{r_1}}
> {\{(\bar\epsilon,(\operatorname{sgn}\sigma(\epsilon))_\sigma):\epsilon\in E\}}.
> $$
> To prove this, every ray class mapping to the identity in the ordinary class group is represented by a principal ideal $(a)$. The finite residue and real signs of $a$ record its class modulo ray principal ideals. Replacing the generator by $\epsilon a$ precisely divides out the unit image in the displayed formula. Weak approximation and the Chinese remainder theorem realize every combination of residues and signs, so there are no further restrictions.
> Let $\rho:(\mathcal O_K/\mathfrak m)^\times\to(\mathcal O_K/\mathfrak m')^\times$ be reduction, and put $R=\ker\rho$. The second kernel is
> $$
> \ker(\mathrm{Cl}^\mathfrak m\to\mathrm{Cl}^{\mathfrak m'})
> \cong R/\operatorname{im}(E_{\mathfrak m'}^+\to R).
> $$
> Indeed, an ideal in the kernel can be written as $(a)$, where $a$ is totally positive and $a\equiv1\bmod\mathfrak m'$. Its class modulo $\mathfrak m$ lies in $R$. Two generators differ by $E_{\mathfrak m'}^+$, while a ratio congruent to $1$ modulo $\mathfrak m$ gives the trivial ray class. The positive-lift construction in the preceding exercise realizes every element of $R$. The unit image may also be written as $E_{\mathfrak m'}^+/E_\mathfrak m^+$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Modules and Exact Sequences]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

The statement was checked against the original page image [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 14, printed p.368, PDF p.387]. The solution is an independent derivation. In the first formula, $\mathrm{Cl}_K$ is the ordinary ideal class group; $\mathrm{Cl}_K^1$ is the narrow class group. They must not be confused.
