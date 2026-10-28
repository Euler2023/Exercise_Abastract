---
title: "Exercise R462: Continuity and Compactness of the l-Adic Integers"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 9, Section 9.2, Exercise 9.2.1, printed p. 383, PDF p. 395"
source_refs:
  - "S7/ch-9/sec-2/ex-1"
created: 2026-10-28
---

# Exercise R462: Continuity and Compactness of the l-Adic Integers

## Problem Statement

> [!question] Original Exercise 9.2.1
> (a) Show that the ring operations of $\mathbb Z_\ell$ are continuous under the $\ell$-adic topology.
>
> (b) Show that this topology makes $\mathbb Z_\ell$ a topological subgroup of $P=\prod_{n=1}^{\infty}\mathbb Z/\ell^n\mathbb Z$. The product is compact by Tychonov's theorem. For $P_n=\prod_{m=1}^n\mathbb Z/\ell^n\mathbb Z$ and its projection $\pi_n:P\to P_n$, show $P_n$ contains a closed subgroup $C_n$ of compatible elements such that $\mathbb Z_\ell=\bigcap_{n=1}^{\infty}\pi_n^{-1}(C_n)$. Deduce compactness. (A hint for this exercise is at the end of the book.)
>
> (c) Show that the field operations of $\mathbb Q_\ell$ are continuous under the $\ell$-adic topology.

> [!warning] Source issue
> The printed finite product repeats $\ell^n$ in every factor (printed p.383 / PDF395). To be the stated coordinate projection of $P$, it must be $P_n=\prod_{m=1}^n\mathbb Z/\ell^m\mathbb Z$. The solution uses this corrected product; compatibility then means reduction from the $(m+1)$st coordinate to the $m$th.

## Hints

> [!hint]- Hint 1
> Congruences modulo $\ell^n$ are preserved by addition and multiplication of integral inputs.

> [!hint]- Hint 2
> For inversion use $x^{-1}-y^{-1}=(y-x)/(xy)$ on a neighborhood where the valuations of $x$ and $y$ agree.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a).** If $x'\equiv x$ and $y'\equiv y\pmod{\ell^n}$ then $x'+y'\equiv x+y$, $-x'\equiv-x$ and $x'y'\equiv xy\pmod{\ell^n}$. Thus the inverse image of every basic neighborhood contains a product of basic neighborhoods around each of its points, proving joint continuity of addition and multiplication and continuity of negation.
>
> **(b).** Embed an inverse-limit sequence by its coordinates. Fixing finitely many compatible coordinates is equivalent to fixing the last one, because all earlier entries are its reductions. Therefore the induced product topology is exactly the congruence topology, and componentwise addition makes the embedded set a topological subgroup. Define
> $$
> C_n=\{(a_1,\ldots,a_n):a_{m+1}\equiv a_m\pmod{\ell^m}\ (m<n)\}.
> $$
> This is a subgroup and is closed, since $P_n$ is finite discrete. A sequence belongs to all $\pi_n^{-1}(C_n)$ precisely when every adjacent compatibility condition holds, giving the asserted intersection. It is closed in the compact space $P$, hence compact.
>
> **(c).** Write $v=v_\ell$ and $v(0)=\infty$. The estimates $v(a+b)\ge\min(v(a),v(b))$ and $v(ab)=v(a)+v(b)$ give continuity of addition and negation everywhere. Near fixed $x,y$, their nearby values have valuations bounded below; the identity $x'y'-xy=x'(y'-y)+(x'-x)y$ then proves continuity of multiplication. If $x\ne0$, choose $v(y-x)>v(x)$; then $v(y)=v(x)$ and
> $$
> v(y^{-1}-x^{-1})=v(y-x)-2v(x)\longrightarrow\infty.
> $$
> This proves continuity of inversion on $\mathbb Q_\ell^*$ and consequently division on its natural domain.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[04 - Linear Algebra and Modules/Concepts/Direct and Inverse Limits|Direct and Inverse Limits]]
- [[08 - Arithmetic Geometry/Concepts/Compactness and Quasi-Compactness|Compactness and Quasi-Compactness]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Imported input:** Tychonov compactness for the product of finite discrete spaces, as explicitly allowed by the source.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
