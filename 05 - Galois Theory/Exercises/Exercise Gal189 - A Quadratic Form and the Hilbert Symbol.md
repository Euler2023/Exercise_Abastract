---
title: 'Exercise Gal189: A Quadratic Form and the Hilbert Symbol'
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §3, Exercise 1, printed p. 340, PDF p. 359
source_refs:
- S4/ch-V/sec-3/ex-1
created: '2026-10-23'
---

# Exercise Gal189: A Quadratic Form and the Hilbert Symbol

## Problem Statement

> [!question] Neukirch V.3.1
> For $n=2$ the Hilbert symbol has the following concrete meaning:
> $$
> \left(\frac{a,b}{\mathfrak p}\right)=1\quad\Longleftrightarrow\quad ax^2+by^2-z^2=0\text{ has a nontrivial solution in }K.
> $$

## Hints

> [!hint]- Hint 1
> Use the norm criterion for the quadratic extension $K(\sqrt b)/K$.

> [!hint]- Hint 2
> If $x=0$ in an isotropic vector, then $b$ is already a square.

## Solution

> [!success]- Independent derivation
> The ambient hypotheses of the Hilbert-symbol section include $\operatorname{char}K\ne2$ and $a,b\in K^*$. By V (3.2)(iii), the left side says that $a$ is a norm from $K(\sqrt b)$.
>
> If $b$ is a square, both assertions hold: the Kummer extension is trivial, and $(x,y,z)=(0,1,\sqrt b)$ is a nonzero solution. Now suppose $b$ is not a square. If the symbol is $1$, choose $z,y\in K$ with
> $$
> a=N(z+y\sqrt b)=z^2-by^2.
> $$
> Then $(1,y,z)$ is a nonzero solution of the displayed form.
>
> Conversely let $(x,y,z)\ne(0,0,0)$ solve the equation. If $x=0$, then $z^2=by^2$; nonsquareness of $b$ forces $y=z=0$, a contradiction. Therefore $x\ne0$, and
> $$
> a=(z/x)^2-b(y/x)^2=N_{K(\sqrt b)/K}(z/x+(y/x)\sqrt b).
> $$
> The norm criterion gives the symbol $1$. This proves both directions, including the split case.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Kummer Extensions|Kummer extensions]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local fields]]

## Notes

Original statement: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §3, Exercise 1, printed p. 340, PDF p. 359]. Independent derivation from the norm interpretation V (3.1)–(3.2), printed pp. 333–334, PDF pp. 352–353. The primary tool is the quadratic extension norm, which determines the Galois routing.
