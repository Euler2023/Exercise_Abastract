---
title: "Exercise MF107: The Eisenstein Norm Form and a Weight One Series"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.11, Exercise 4.11.5, printed p. 162, PDF p. 176"
source_refs:
  - "S7/ch-4/sec-11/ex-5"
created: 2026-10-28
---

# Exercise MF107: The Eisenstein Norm Form and a Weight One Series

## Problem Statement

> [!question] Original Exercise 4.11.5
> (a) Use Chapter3 to show $\dim S_1(\Gamma_0(3))=0$, so that if $\psi$ is the quadratic character modulo three then $M_1(3,\psi)=\mathbb CE_1^{\psi,1}$.
>
> (b) Let $\theta_1$ be the theta function of Theorem4.11.3 at $N=1$, with trivial character. Thus $\theta_1\in M_1(3,\psi)$ is a constant multiple of $E_1^{\psi,1}$. What is the constant?
>
> (c) Its coefficients are, up to a constant, representation numbers of $n_1^2-n_1n_2+n_2^2$, hence multiples of $\sigma_0^{\psi,1}(m)=\sum_{d\mid m}\psi(d)$ for $m\ge1$. Check the relation for prime $p$ using the ring information from Corollary3.7.2. One can work backwards to derive the representation formula and identity arithmetically.

> [!warning] Source issue
> The printed trivial-character assertion about $\Gamma_0(3)$ is true but does not by itself imply a statement about $M_1(3,\psi)$. The required input is the weight-one dimension and cusp vanishing for $\Gamma_1(3)$ (or its $\psi$ eigenspace); this missing step is supplied explicitly.

## Hints

> [!hint]- Hint 1
> The required character space sits inside $M_1(\Gamma_1(3))$. This group has genus zero and two regular cusps.

> [!hint]- Hint 2
> The constants of $\theta_1$ and $E_1^{\psi,1}$ are $1/6$ and $L(0,\psi)=1/3$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a), with the needed justification.** Since $-I\in\Gamma_0(3)$, all trivial-character odd-weight forms on it are zero; this proves the literal $S_1(\Gamma_0(3))=0$. To deduce the character-space assertion, use $\Gamma_1(3)$ instead: its genus is zero and its two cusps are regular, so the weight-one criterion gives $\dim M_1(\Gamma_1(3))=1$ and $S_1(\Gamma_1(3))=0$. The quotient $\Gamma_0(3)/\Gamma_1(3)$ is the order-two unit group modulo three; odd weight forces its nontrivial character $\psi$. Therefore this one-dimensional modular space is exactly $M_1(3,\psi)$. The nonzero weight-one Eisenstein series spans it.
>
> **(b)** The zero lattice vector gives $a_0(\theta_1)=1/6$. For $\psi(1)=1$, $\psi(2)=-1$, the generalized Bernoulli formula gives
> $$
> B_{1,\psi}=(1/3-1/2)-(2/3-1/2)=-1/3,\qquad L(0,\psi)=1/3.
> $$
> This is the constant of $E_1^{\psi,1}$. Their ratio is $1/2$, so $\theta_1=\tfrac12E_1^{\psi,1}$. Since the Eisenstein nonconstant coefficients are $2\sum_{d\mid m}\psi(d)$, the representation number is
> $$
> r(m)=6\sum_{d\mid m}\psi(d)\quad(m\ge1).
> $$
> **(c)** If $p\equiv1\pmod3$, it splits as $\pi\overline\pi$ into two nonassociate Eisenstein primes of norm $p$. Unique factorization implies every norm-$p$ element is a unit times one of them. The six units produce $12$ elements, agreeing with $6(1+\psi(p))=12$. If $p\equiv2\pmod3$, it is inert, so no element has norm $p$; the formula also gives zero. At $p=3$, the prime ramifies and its unique prime factor of norm three has six unit multiples, giving six, as does $6(1+\psi(3))=6$.
>
> More generally, unique ideal factorization gives $\sum_{d\mid m}\psi(d)$ ideals of norm $m$: a split prime-power factor contributes $e+1$, an inert one contributes one or zero for even or odd exponent, and the ramified prime contributes one. The ring is a PID, each nonzero ideal has six generators differing by units, so this also derives the whole representation formula arithmetically.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions|L-functions]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 162 / PDF 176. The solution above is independently derived.
- **Routing:** The principal toolkit is modular-forms; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
