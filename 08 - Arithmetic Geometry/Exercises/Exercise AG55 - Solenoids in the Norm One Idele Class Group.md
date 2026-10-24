---
title: 'Exercise AG55: Solenoids in the Norm One Idele Class Group'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 8, printed p. 368, PDF p. 387
source_refs:
- S4/ch-VI/sec-1/ex-8
created: '2026-10-23'
---

# Exercise AG55: Solenoids in the Norm One Idele Class Group

## Problem Statement

> [!question] Neukirch VI.1.8
> (i) The image $D_K^0$ of $f$ is compact, connected and arbitrarily divisible.
> (ii) $f$ yields a topological isomorphism
> $$
> f:\bigl((\widehat{\mathbb Z}\times\mathbb R)/\mathbb Z\bigr)^t\times(\mathbb R/\mathbb Z)^s\xrightarrow{\sim}D_K^0.
> $$

> [!note] Root-of-unity convention from the preceding exercise
> If $K$ is totally imaginary, retain the visible correction from Exercise 6: the $\epsilon_i$ are lifts of a free basis of the totally positive units modulo roots of unity. Finite roots of unity are handled by complex phases, without additional profinite parameters.

## Hints

> [!hint]- Hint 1 — first step
> Find a compact set of representatives for $(\widehat{\mathbb Z}\times\mathbb R)/\mathbb Z$ before considering connectedness.

> [!hint]- Hint 2 — proof route
> First descend $f$ using its kernel. The solenoid is compact because of the fundamental domain $\widehat{\mathbb Z}\times[0,1]$; prove connectedness by a dense real line.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> By the preceding kernel calculation, $f$ induces a continuous bijection from the displayed quotient group to $D_K^0$. Each solenoid factor $\Sigma=(\widehat{\mathbb Z}\times\mathbb R)/\mathbb Z$ has a compact set of representatives $\widehat{\mathbb Z}\times[0,1]$, so $\Sigma$ is compact; the circle $\mathbb R/\mathbb Z$ is compact as well. Their finite product is compact, and $C_K$ is Hausdorff, so this continuous bijection is a homeomorphism. This proves (ii) and compactness.
> The image of $\{0\}\times\mathbb R$ in $\Sigma$ is dense: choose integers $n_j\to-x$; then $[0,t+n_j]=[-n_j,t]\to[x,t]$. Hence $\Sigma$ is connected, and so are the displayed product and its image.
> Multiplication by $n$ on $\Sigma$ is surjective: given $[x,t]$, choose an integer $k$ such that $x+k\in n\widehat{\mathbb Z}$. Then $[(x+k)/n,(t+k)/n]$ is an $n$th division point of the original class. Division by $n$ is also possible on the circle. Thus $D_K^0$ is divisible by every $n$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adèles and Idèles]]
- [[08 - Arithmetic Geometry/Concepts/Connectedness and Connected Components|Connectedness]]

## Notes

The statement was checked against images of the original book. [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 8, printed p.368, PDF p.387]. The solution is an independent derivation.
