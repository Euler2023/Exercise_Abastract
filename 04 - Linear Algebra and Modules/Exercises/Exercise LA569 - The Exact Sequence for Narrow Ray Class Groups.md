---
title: 'Exercise LA569: The Exact Sequence for Narrow Ray Class Groups'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 13, printed p. 368, PDF p. 387
source_refs:
- S4/ch-VI/sec-1/ex-13
created: '2026-10-23'
---

# Exercise LA569: The Exact Sequence for Narrow Ray Class Groups

## Problem Statement

> [!question] Neukirch VI.1.13
> For every module $\mathfrak m$, one has an exact sequence
> $$
> 1\longrightarrow\mathfrak o_+^*/\mathfrak o_+^{\mathfrak m}\longrightarrow(\mathfrak o/\mathfrak m)^*\longrightarrow Cl_K^{\mathfrak m}\longrightarrow Cl_K^1\longrightarrow1,
> $$
> where $\mathfrak o_+^*$, resp. $\mathfrak o_+^{\mathfrak m}$, is the group of totally positive units of $\mathfrak o$, resp. of totally positive units $\equiv1\bmod\mathfrak m$.

## Hints

> [!hint]- Hint
> Lift a residue unit to a totally positive integer and send it to its principal ideal class. Check dependence on lifts before computing the kernel.

> [!hint]- Stronger hint
> Send a positive residue lift u to the ray class of (u). The kernel consists exactly of positive units modulo the ray-unit subgroup.

## Solution

> [!success]- Independent derivation
> Use Neukirch's convention here: every ray modulus includes positivity conditions at all real places, so $\mathrm{Cl}_K^1$ is the narrow ideal class group. Set $E_+=\mathcal O_{K,+}^\times$ and $E_\mathfrak m=E_+\cap(1+\mathfrak m)$.
> By the preceding exercise, every $\bar u\in(\mathcal O_K/\mathfrak m)^\times$ has a totally positive lift $u$. Define $\bar u\mapsto[(u)]_\mathfrak m$. If $u'$ is another totally positive lift, then $u/u'$ is totally positive and congruent to $1$. The two principal ideals therefore have the same ray class. This makes the map well-defined and a homomorphism.
> Its kernel is exactly $\operatorname{im}E_+$. Indeed, if $(u)$ is trivial in the ray class group, there is a totally positive $b\equiv1\pmod{\mathfrak m}$ with $(u)=(b)$, hence $u/b\in E_+$. The converse follows directly. The kernel of the map from $E_+$ to the residue unit group is $E_\mathfrak m$, giving injectivity on the left.
> The map $\mathrm{Cl}^\mathfrak m\to\mathrm{Cl}^1$ that forgets the finite congruence conditions is surjective, since the preceding exercise gives a representative prime to $\mathfrak m$ for every narrow class. Its kernel consists of totally positive principal ideals and is exactly the image of the middle map. Thus the entire sequence is exact.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Modules and Exact Sequences]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

The statement was checked against the original page image [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 13, printed p.368, PDF p.387]. The solution is an independent derivation.
