---
title: 'Exercise AG60: A Nonzero First Moment of a Primitive Odd Character'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §2, Exercise 4, printed p. 443, PDF p. 462
source_refs:
- S4/ch-VII/sec-2/ex-4
created: '2026-10-23'
---

# Exercise AG60: A Nonzero First Moment of a Primitive Odd Character

## Problem Statement

> [!question] Neukirch VII.2.4
> For a primitive odd character $\chi$, one has
> $$
> \sum_{a=1}^m\chi(a)a\ne0.
> $$

## Hints

> [!hint]- Hint 1
> The first coefficient of the generalized Bernoulli generating function is $B_{1,\chi}=m^{-1}\sum_a a\chi(a)$ because the sum of a nontrivial character is zero.

> [!hint]- Hint 2
> Use the proved special-value formula (2.10), with $k=1$ and character $\bar\chi$, and the later proved nonvanishing theorem $L(\bar\chi,1)\ne0$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Let $\chi$ be primitive of conductor $m$ and odd, so $\chi(-1)=-1$. It is nontrivial. Choose a unit $u$ with $\chi(u)\ne1$ and permute the units modulo $m$ by multiplication by $u$; this proves
> $$
> \sum_{a=1}^m\chi(a)=0.
> $$
> Expand the defining series at zero:
> $$
> \frac{te^{at}}{e^{mt}-1}=\frac1m+\left(\frac am-\frac12\right)t+O(t^2).
> $$
> Its first coefficient after summation is therefore
> $$
> B_{1,\chi}=\sum_{a=1}^m\chi(a)\left(\frac am-\frac12\right)
> =\frac1m\sum_{a=1}^m a\chi(a).
> $$
> We now state the two logically independent source inputs. Corollary (2.10) gives, for a primitive odd character $\psi$ at $k=1$,
> $$
> L(\psi,1)=\frac{i\pi\tau(\psi)}m B_{1,\bar\psi}.
> $$
> This follows there from the proved functional equation and special values, rather than from the present exercise. Proposition (5.13), proved later by comparing the simple poles of cyclotomic Dedekind zeta functions and the Riemann zeta function, asserts $L(\psi,1)\ne0$ for every nontrivial Dirichlet character. Neither input assumes the conclusion of this exercise.
>
> Apply them to $\psi=\bar\chi$, which remains primitive, odd and nontrivial. We obtain
> $$
> 0\ne L(\bar\chi,1)=\frac{i\pi\tau(\bar\chi)}{m^2}
> \sum_{a=1}^m a\chi(a).
> $$
> A zero final sum would make the right side zero, a contradiction. Thus the requested first moment is nonzero. This is a complete deduction from the stated proved source results, not an elementary proof of Dirichlet nonvanishing itself.
>
> For the odd character modulo $3$ the sum is $1-2=-1$, giving a concrete check. The primitivity hypothesis matters: induce this character to modulus $21$. Its first moment vanishes because the removed Euler factor at $7$ is $1-\chi(7)=0$ at $s=0$. Directly, the nonzero contributions at $a=1,2,4,5,8,10,11,13,16,17,19,20$ sum to $0$.

## Related Concepts

- [[07 - Modular Forms/Concepts/L-functions|L-functions]]
- [[02 - Ring Theory/Concepts/Bernoulli Numbers and Polynomials|Bernoulli Numbers and Polynomials]]
- [[06 - Representation Theory/Concepts/Characters|Characters]]

## Notes

- **Source status:** The precise primitive-odd hypothesis and the sum were visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §2, Exercise 4, printed p. 443, PDF p. 462]. Corollary (2.10) is immediately above the exercise on that same checked page. The generalized Bernoulli definition was checked at [printed p. 441, PDF p. 460], and the independent nonvanishing Proposition (5.13) at [printed p. 469, PDF p. 488].
- **Proof boundary:** The solution imports the proved, more general $L(1,\psi)$ nonvanishing theorem from later in the chapter, and fully derives its consequence here. It does not cite this exercise or merely restate its first-moment conclusion as an external theorem. No source figure is needed.
