---
title: "Exercise LA643: Small Subgroups in l-Adic and Complex Matrix Groups"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 9, Section 9.2, Exercise 9.2.2, printed p. 383, PDF p. 395"
source_refs:
  - "S7/ch-9/sec-2/ex-2"
created: 2026-10-28
---

# Exercise LA643: Small Subgroups in l-Adic and Complex Matrix Groups

## Problem Statement

> [!question] Original Exercise 9.2.2
> Since $U(n)$ is a subgroup of $\mathbb Z_\ell^*$ for every $n\in\mathbb Z^+$, every neighborhood of $1$ in $\mathbb Q_\ell^*$ contains a nontrivial subgroup. Show that the analogous result fails with $\mathbb C$ in place of $\mathbb Q_\ell$, and similarly for $\mathrm{GL}_d(\mathbb Q_\ell)$ versus $\mathrm{GL}_d(\mathbb C)$. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> Over $\mathbb Q_\ell$ use the congruence kernels $I+\ell^n\mathrm M_d(\mathbb Z_\ell)$.

> [!hint]- Hint 2
> Over $\mathbb C$, if all powers of a matrix stay close to $I$, first consider its eigenvalues, then its unipotent Jordan blocks.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> For $n\ge1$, $1+\ell^n\mathbb Z_\ell$ is a subgroup: products stay there and $(1+x)^{-1}=\sum_{r\ge0}(-x)^r$ stays there for $x\in\ell^n\mathbb Z_\ell$. It contains $1+\ell^n\ne1$ and these subgroups form a neighborhood basis. The same geometric series for matrices proves that $I+\ell^n\mathrm M_d(\mathbb Z_\ell)$ is a subgroup of $\mathrm{GL}_d(\mathbb Q_\ell)$. It contains $I+\ell^n E_{11}\ne I$, and every identity neighborhood contains one.
>
> Choose an operator norm on complex matrices and the neighborhood $W=\{A:\|A-I\|<1/2\}$. Suppose a subgroup lies in $W$ and $A$ belongs to it. Every integer power $A^m$ lies in $W$. If $\lambda$ is an eigenvalue of $A$, then $|\lambda^m-1|<1/2$ for every integer $m$. If $|\lambda|\ne1$, positive or negative powers have unbounded modulus, a contradiction. If $|\lambda|=1$ and $\lambda\ne1$, some positive power has distance at least one from $1$: indeed write $\lambda=e^{i\theta}$ with $0<|\theta|\le\pi$ and choose the first positive multiple reaching angle $\pi/3$, which lies between $\pi/3$ and $4\pi/3$. Thus every eigenvalue is one.
>
> If $A\ne I$, its Jordan form has a nontrivial unipotent block. The first superdiagonal of its $m$th power has a nonzero entry growing linearly in $m$; hence $A^m$ is unbounded after conjugation back, contradicting $\|A^m-I\|<1/2$. Therefore $A=I$ and $W$ contains no nontrivial subgroup. Taking $d=1$ proves the assertion for $\mathbb C^*$ as well.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Jordan Canonical Form|Jordan Canonical Form]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Method boundary:** This is the no-small-subgroups property of a complex matrix group. The proof includes nonsemisimple matrices and does not rely on eigenvalues alone.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
