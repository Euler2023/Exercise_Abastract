---
title: 'Exercise AG57: The Connected Component of the Full Idele Class Group'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 10, printed p. 368, PDF p. 387
source_refs:
- S4/ch-VI/sec-1/ex-10
created: '2026-10-23'
---

# Exercise AG57: The Connected Component of the Full Idele Class Group

## Problem Statement

> [!question] Neukirch VI.1.10
> The connected component $D_K$ of $1$ in the idèle class group $C_K$ is the direct product of $t$ copies of the “solenoid” $(\widehat{\mathbb Z}\times\mathbb R)/\mathbb Z$, $s$ circles $\mathbb R/\mathbb Z$, and a real line.

> [!note] Root-of-unity convention from the preceding exercise
> If $K$ is totally imaginary, retain the visible correction from Exercise 6: the $\epsilon_i$ are lifts of a free basis of the totally positive units modulo roots of unity. Finite roots of unity are handled by complex phases, without additional profinite parameters.

## Hints

> [!hint]- Hint 1 — first step
> Construct a continuous section of the absolute norm by putting a positive number in one infinite component.

> [!hint]- Hint 2 — proof route
> Split the absolute norm using a positive infinite component. Then use the two preceding exercises.

## Solution

> [!success]- Independent derivation
> Choose an infinite place $v_0$. If it is real, put $r>0$ in that component; if it is complex, put $r^{1/2}>0$ in that component; put $1$ in all other components. With the standard normalization in which the complex absolute value is the square of the usual modulus, this gives a continuous group section $s:\mathbb R_{>0}\to C_K$ satisfying $\mathfrak N(s(r))=r$.
> The map
> $$
> C_K^0\times\mathbb R_{>0}\longrightarrow C_K,\qquad(c,r)\longmapsto c\,s(r)
> $$
> is a topological isomorphism, with inverse $a\mapsto(a\,s(\mathfrak N(a))^{-1},\mathfrak N(a))$. Hence the identity component is $D_K^0\times\mathbb R_{>0}$. By Exercise 8 and the logarithmic isomorphism $\mathbb R_{>0}\cong(\mathbb R,+)$,
> $$
> D_K\cong\Sigma^t\times(\mathbb R/\mathbb Z)^s\times\mathbb R.
> $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adèles and Idèles]]
- [[08 - Arithmetic Geometry/Concepts/Connectedness and Connected Components|Connectedness]]

## Notes

The statement was checked against images of the original book. [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 10, printed p.368, PDF p.387]. The solution is an independent derivation.
