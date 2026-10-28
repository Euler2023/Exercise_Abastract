---
title: "Exercise G378: Cubing in a Finite Multiplicative Group"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.11, Exercise 4.11.1, printed p. 161, PDF p. 175"
source_refs:
  - "S7/ch-4/sec-11/ex-1"
created: 2026-10-28
---

# Exercise G378: Cubing in a Finite Multiplicative Group

## Problem Statement

> [!question] Original Exercise 4.11.1
> Show that for any prime $p$ the map $x\mapsto x^3$ is an endomorphism of $(\mathbb Z/p\mathbb Z)^\times$. Show it is three-to-one if $p\equiv1\pmod3$ and one-to-one if $p\equiv2\pmod3$. Use this to establish(4.47).
>
> For $C:x^3=d$, $d>0$ cubefree, $a_p(C)$ is the number of solutions modulo $p$ minus one. Formula(4.47) gives $2$ for $p\equiv1\pmod3$ with $d$ a nonzero cube, $-1$ for $p\equiv1\pmod3$ with $d$ not a cube, and zero for $p\equiv2\pmod3$ or $p\mid3d$.

## Hints

> [!hint]- Hint 1
> In a cyclic group of order $p-1$, cubing has kernel of size $\gcd(3,p-1)$.

> [!hint]- Hint 2
> Handle $d\equiv0$ and $p=3$ separately.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> The group is abelian, so $(xy)^3=x^3y^3$ proves the homomorphism law. By cyclicity of the multiplicative group of a finite field, write its elements as powers of a generator $g$; the kernel consists of $g^j$ with $3j\equiv0\pmod{p-1}$ and has size $\gcd(3,p-1)$. Each nonempty fiber is a coset of this kernel. Thus the map has three elements in each fiber over its image if $p\equiv1\pmod3$, and is bijective if $p\equiv2\pmod3$. At $p=3$ it is also bijective, since $x^3=x$ in $\mathbb F_3$.
>
> If $p\mid d$, only $x=0$ solves the equation, giving $a_p=0$. Otherwise every solution is nonzero. For $p\equiv1\pmod3$, there are three or zero solutions according as $d$ is or is not in the image; subtracting one gives $2$ or $-1$. For $p\equiv2\pmod3$ or $p=3$, there is exactly one solution, giving zero. These cases establish all of(4.47), including the bad primes.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange Theorem]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 161 / PDF 175. The solution above is independently derived.
- **Routing:** The principal toolkit is group-theory; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
