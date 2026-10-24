---
title: 'Exercise Gal206: Cyclic Extensions with Prescribed Local Completions'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §6, Exercise 7, printed p. 405, PDF p. 424
source_refs:
- S4/ch-VI/sec-6/ex-7
created: '2026-10-23'
---

# Exercise Gal206: Cyclic Extensions with Prescribed Local Completions

## Problem Statement

> [!question] Neukirch VI.6.7
> (**Theorem of Grunwald**). If the last condition of exercise 6 is satisfied for the triple $(K,n,S)$, then, given cyclic extensions $L_{\mathfrak p}|K_{\mathfrak p}$ for $\mathfrak p\in S$, there always exists a cyclic extension $L|K$ which has $L_{\mathfrak p}|K_{\mathfrak p}$ as a completion for $\mathfrak p\in S$, and which satisfies the identity of degrees
> $$
> [L:K]=\operatorname{lcm}\{[L_{\mathfrak p}:K_{\mathfrak p}]\}
> $$
> (see also [10], chap. X, §2).
> **Printed note (separate quoted source input):** Let $G$ be a finite group of order prime to $\#\mu(K)$, let $S$ be a finite set of places, and let $L_{\mathfrak p}|K_{\mathfrak p}$, $\mathfrak p\in S$, be given Galois extensions whose Galois groups $G_{\mathfrak p}$ can be embedded into $G$. Then there exists a Galois extension $L|K$ which on the one hand has Galois group isomorphic to $G$, and which on the other hand has the given extensions $L_{\mathfrak p}|K_{\mathfrak p}$ as completions (see [109]).

## Hints

> [!hint]- Hint
> Take $n$ to be the displayed least common multiple. Embed each local cyclic character into $\mathbb Z/n$, extend it globally using Exercise6, and check the global character has order exactly $n$.

> [!hint]- Stronger hint
> Embed each local cyclic character of degree d_v into Z/n with n=lcm(d_v); a global lift must have order exactly n.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> **Clarification of the hypotheses.** Here $n$ must be the least common multiple of $d_v=[L_v:K_v]$, and the sufficient condition in Exercise 6 must be checked for this $n$. Checking it for an unrelated $n$ does not allow arbitrary local degrees to be prescribed. If $S$ is empty, take $n=1,L=K$.
> For nonempty $S$, the local cyclic extensions give continuous surjective characters $\chi_v:G_{K_v}\to\mathbb Z/d_v$. Embed them into $\mathbb Z/n$ using $1\mapsto n/d_v$; their kernels still fix exactly $L_v$. Exercise 6 proves that, under its applicable sufficient conditions, the global restriction map
> $$
> H^1(K,\mathbb Z/n)\to\prod_{v\in S}H^1(K_v,\mathbb Z/n)
> $$
> is surjective. Thus all these local characters are restrictions of a single global continuous character $\chi:G_K\to\mathbb Z/n$.
> Let $L$ be the fixed field of $\ker\chi$. It is a finite cyclic extension. For every $v$, the image of $\chi$ contains a subgroup of order $d_v$, so its order is divisible by every $d_v$. Its order also divides $n=\operatorname{lcm}d_v$, and therefore equals $n$. Hence $[L:K]=n$.
> At each $v$, the restricted character has kernel $G_{L_v}$. The chosen completion is therefore exactly the prescribed $L_v$, rather than merely containing it. This also verifies the degree equality.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

The statement was checked against the original printed p.405 / PDF p.424. The solution is independently derived. This is a Grunwald conclusion with explicit sufficient conditions; the unconditional version prescribing an exact degree has Wang exceptions. The relation between the printed $n$ and the local degrees is explicitly supplied in the solution.

- **Scope of printed note:** The following finite-group realization note is retained as separately cited source context, not as an additional numbered exercise or as a theorem independently proved by this cyclic Grunwald solution.
