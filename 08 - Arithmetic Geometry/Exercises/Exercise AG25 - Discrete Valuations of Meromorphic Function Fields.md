---
title: "Exercise AG25: Discrete Valuations of Meromorphic Function Fields"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
  - meromorphic-functions
  - discrete-valuations
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XII, Exercises, Exercise 20, printed pp. 498-499, PDF pp. 513-514"
created: 2026-09-25
---

# Exercise AG25: Discrete Valuations of Meromorphic Function Fields

## Problem Statement

> [!question] Lang, Chapter XII, Exercise 20
> (Iss'sa–Hironaka, *Ann. of Math.* 83 (1966), pp. 34–46.) This exercise requires a good working knowledge of complex variables. Let $K$ be the field of meromorphic functions on the complex plane $\mathbb C$. Let $\mathfrak o$ be a discrete valuation ring of $K$ (containing the constants $\mathbb C$). Show that the function $z$ is in $\mathfrak o$.
>
> *Hint (source):* Let $a_1,a_2,\ldots$ be a discrete sequence of complex numbers tending to infinity, for instance the positive integers. Let $v_1,v_2,\ldots$ be a sequence of integers, $0\le v_i\le p-1$, for some prime number $p$, such that $\sum_i v_i p^i$ is not the $p$-adic expansion of a rational number. Let $f$ be an entire function having a zero of order $v_i p^i$ at $a_i$ for each $i$ and no other zero. If $z$ is not in $\mathfrak o$, consider the quotient
>
> $$
> g(z)=\frac{f(z)}{\prod_{i=1}^{n}(z-a_i)^{v_i p^i}}.
> $$
>
> From the Weierstrass factorization of an entire function, show that $g(z)=h(z)^{p^{n+1}}$ for some entire function $h(z)$. Now analyze the zero of $g$ at the discrete valuation of $\mathfrak o$ in terms of that of $f$ and $\prod_{i=1}^{n}(z-a_i)^{v_i p^i}$ to get a contradiction.
>
> If $U$ is a non-compact Riemann surface, and $L$ is the field of meromorphic functions on $U$, and if $\mathfrak o$ is a discrete valuation ring of $L$ containing the constants, show that every holomorphic function $\varphi$ on $U$ lies in $\mathfrak o$. *Hint (source):* Map $\varphi:U\to\mathbb C$, obtain a discrete valuation of $K$ by composing $\varphi$ with meromorphic functions on $\mathbb C$, and apply the first part of the exercise. Show that the valuation ring is the one associated with a complex number. *Further hint (source):* If you do not know about Riemann surfaces, do it for the complex plane. For each $z\in U$, let $f_z$ be a function holomorphic on $U$ and having only a zero of order $1$ at $z$. If for some $z_0$ the function $f_{z_0}$ has order $\ge1$ at $\mathfrak o$, show that $\mathfrak o$ is the valuation ring associated with $z_0$. Otherwise every function $f_z$ has order $0$ at $\mathfrak o$. Conclude that the valuation of $\mathfrak o$ is trivial on any holomorphic function by a limit trick analogous to that of the first part of the exercise.

> [!warning] Source issue: the final location is a point of $U$
> After changing from $\mathbb C$ to an arbitrary non-compact Riemann surface $U$, the printed text still says that the valuation ring is “associated with a complex number.” The intrinsic conclusion is that it is the local valuation ring at a **point $a\in U$**. A complex number labels that point only when $U=\mathbb C$ or a coordinate has been chosen.

## Hints

> [!hint]- Hint 1: Convert an alleged pole into a congruence
> If $v(z)<0$ and constants have value $0$, then $v(z-a_i)=v(z)$ for every $i$. The entire $p^{n+1}$-st root in Lang's hint forces a congruence modulo $p^{n+1}$ between the integers $v(f)$ and $v(z)\sum_{i\le n}v_i p^i$.

> [!hint]- Hint 2: Pull back along a holomorphic function
> A nonconstant holomorphic $\varphi:U\to\mathbb C$ gives an injection of meromorphic function fields by composition. A negative valuation of $\varphi$ would contradict the first part.

> [!hint]- Hint 3: Exclude a valuation with no point center
> If every single-zero function $f_a$ is a unit but some holomorphic $g$ has positive valuation, then $g$ has infinitely many zeros $a_i$. Build a holomorphic $h$ with zero order $i$ times the order of $g$ at $a_i$ and compare $h/g^N$ for arbitrary $N$.

## Solution

> [!success]- Derivation from stated analytic inputs
> Let $v:K^\times\to\mathbb Z$ be the normalized valuation of $\mathfrak o$. Nonzero constants lie in $\mathfrak o$ together with their inverses, so $v(c)=0$ for every $c\in\mathbb C^\times$.
>
> **1. The coordinate $z$ cannot have a pole at $v$.** Suppose $t=v(z)<0$. Choose a prime $p$ and digits $0\le v_i\le p-1$ such that the $p$-adic integer $S=\sum_{i\ge1}v_i p^i$ is not rational. Such a digit string exists because there are uncountably many $p$-adic digit strings but only countably many rational numbers. By the Weierstrass zero-set theorem, choose an entire function $f$ whose only zeros are the distinct $a_i\to\infty$, with zero orders $v_i p^i$ when $v_i>0$. For each $n$, define
>
> $$
> g_n(z)=\frac{f(z)}{\prod_{i=1}^{n}(z-a_i)^{v_i p^i}}.
> $$
>
> Every remaining zero order of $g_n$ is divisible by $p^{n+1}$. Weierstrass factorization and the existence of an entire logarithm for a nowhere-zero entire function therefore give $g_n=h_n^{p^{n+1}}$ for some entire $h_n$. Since $v(z-a_i)=\min(v(z),v(a_i))=t$, we obtain the integer congruence
>
> $$
> v(f)-t\sum_{i=1}^{n}v_i p^i=p^{n+1}v(h_n).
> $$
>
> Passing to $\mathbb Z_p$ gives $v(f)=tS$. As $t$ is a nonzero integer, this would imply $S=v(f)/t\in\mathbb Q$, contrary to its choice. Hence $v(z)\ge0$ and $z\in\mathfrak o$.
>
> **2. Every holomorphic function on $U$ belongs to $\mathfrak o$.** Let now $U$ be a connected non-compact Riemann surface, $L=\mathcal M(U)$, and $v$ a nontrivial discrete valuation of $L$ trivial on $\mathbb C^\times$. If $\varphi\in\mathcal O(U)$ is constant, its valuation is $0$ unless it is zero. If it is nonconstant, the open mapping theorem makes the pullback $\varphi^*:\mathcal M(\mathbb C)\hookrightarrow L$, $h\mapsto h\circ\varphi$, injective. If $v(\varphi)<0$, then the restriction of $v$ to this subfield is a nontrivial discrete valuation, so the first part, applied to the coordinate function on $\mathbb C$, gives $v(\varphi)\ge0$, a contradiction. Thus $\mathcal O(U)\subseteq\mathfrak o$.
>
> **3. The valuation has a point center.** We use two analytic facts about non-compact Riemann surfaces: every prescribed locally finite effective zero divisor is the divisor of a holomorphic function, and every meromorphic function is a quotient of two holomorphic functions. These are external Weierstrass/Stein inputs; they are not consequences of the algebraic chapters of Lang's book. In particular, for each $a\in U$ there is a holomorphic $f_a$ with exactly one zero, simple and located at $a$.
>
> If $v(f_a)>0$ for some $a$, then for any holomorphic $g$ with $g(a)\ne0$, the quotient $(g-g(a))/f_a$ is holomorphic on all of $U$. Hence $g=g(a)+f_a q$ has valuation $0$, as $v(g(a))=0$ and $v(f_a q)>0$. Every nonzero holomorphic $g$ factors as $f_a^m g_0$ with $g_0(a)\ne0$, where $m=\operatorname{ord}_a(g)$. It follows that $v(g)=m v(f_a)$. For a meromorphic quotient $g/h$ we consequently have $v(g/h)=v(f_a)\operatorname{ord}_a(g/h)$. Thus $\mathfrak o=\{q\in L:\operatorname{ord}_a(q)\ge0\}$, the local ring at $a$.
>
> Suppose instead that $v(f_a)=0$ for every $a\in U$. If a nonzero holomorphic $g$ had $v(g)>0$, it would have infinitely many distinct zeros: with only finitely many zeros, division by the corresponding finite product of the $f_a$ would leave a nowhere-zero holomorphic unit, all of valuation $0$. Enumerate the zeros as $a_1,a_2,\ldots$, with multiplicities $m_i>0$. The analytic divisor theorem gives a holomorphic $h$ with zero order $i m_i$ at $a_i$ and no other zeros. For every integer $N>0$ the function
>
> $$
> H_N=\frac{h}{g^N}\prod_{i=1}^{N-1}f_{a_i}^{(N-i)m_i}
> $$
>
> is holomorphic: the finite product removes the possible poles at $a_i$ for $i<N$, and at $a_i$ for $i\ge N$ the remaining order is $(i-N)m_i\ge0$. Since $v(H_N)\ge0$ and each $v(f_{a_i})=0$, we get $v(h)\ge N v(g)$ for every $N$, impossible for finite integer $v(h)$ and positive $v(g)$. Therefore every nonzero holomorphic function has valuation $0$, and then so does every quotient of holomorphic functions. This makes $v$ trivial on $L$, contradicting that $\mathfrak o$ is a DVR. Some $f_a$ must have positive valuation, and the preceding paragraph identifies $\mathfrak o$ with the local ring at that point $a\in U$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]

## Notes

- **Routing:** The conclusion classifies valuations of one-dimensional meromorphic function fields by geometric point centers, so Arithmetic Geometry is the closest existing topic. The proof itself uses substantial complex analysis.
- **Source and proof status:** [S2, Ch. XII, Exercise 20, printed pp. 498–499, PDF pp. 513–514]. The valuation argument is independently derived from Lang's hint. The analytic existence of entire and surface-wide holomorphic functions with specified zero divisors, entire roots of functions with divisible zero orders, and meromorphic quotients of holomorphic functions are explicitly imported Weierstrass/Stein inputs. Lang names Iss'sa–Hironaka; their cited paper has not been checked separately here.
- **Scope:** The classification is for nontrivial **discrete** valuations trivial on the constants. The proof uses non-compactness of $U$ through the analytic divisor theorem; it does not establish the analogous classification for arbitrary rank or value group.
