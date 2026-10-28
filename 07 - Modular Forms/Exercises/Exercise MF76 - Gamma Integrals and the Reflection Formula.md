---
title: "Exercise MF76: Gamma Integrals and the Reflection Formula"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.4, Exercise 4.4.1, printed pp. 123\u2013124, PDF pp. 137\u2013138"
source_refs:
  - "S7/ch-4/sec-4/ex-1"
created: 2026-10-28
---

# Exercise MF76: Gamma Integrals and the Reflection Formula

## Problem Statement

> [!question] Original Exercise 4.4.1
> (a) Show that $\Gamma(1)=1$.
>
> (b) Show that $\Gamma(1/2)=\sqrt\pi$. (Hints for this exercise are at the end of the book.)
>
> (c) Show that $\Gamma(s+1)=s\Gamma(s)$ when $\operatorname{Re}s>0$.
>
> (d) For any positive integer $n$, consider $I_n(s)=\int_0^n(1-t/n)^nt^s\,dt/t$, for $\operatorname{Re}s>0$. Thus $\lim_{n\to\infty}I_n(s)=\Gamma(s)$. Change variables to get $I_n(s)=n^s\int_0^1(1-t)^nt^{s-1}dt$, integrate by parts to show that $I_n(s)=(1/s)(n/(n-1))^{s+1}I_{n-1}(s+1)$, and evaluate $I_1(s+n-1)$ to conclude
> $$
> I_n(s)=\frac{n^s}{s\prod_{m=1}^n(1+s/m)}.
> $$
> Therefore $I_n(s)I_n(-s)=[-s^2\prod_{m=1}^n(1-s^2/m^2)]^{-1}$. Letting $n\to\infty$, use $\sin\pi s=\pi s\prod_{m=1}^\infty(1-s^2/m^2)$ and $-s\Gamma(-s)=\Gamma(1-s)$ to prove (4.15), $\Gamma(s)\Gamma(1-s)=\pi/\sin\pi s$. If you have the relevant background, make this heuristic argument rigorous by citing appropriate convergence theorems for integrals and infinite products.

## Hints

> [!hint]- Hint 1
> For (b), put $t=u^2$, square the Gaussian integral, and use polar coordinates.

> [!hint]- Hint 2
> For (d), the integral for $I_n(-s)$ has a different convergence half-plane. Continue its explicit rational expression before multiplying.

> [!hint]- Hint 3
> Extend convergence of the rational expressions from the right half-plane by their shift recurrence; the sine product converges locally uniformly because $\sum m^{-2}<\infty$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a).** Direct integration gives $\Gamma(1)=\int_0^\infty e^{-t}dt=1$.
>
> **(b).** Substitute $t=u^2$ to get $\Gamma(1/2)=2\int_0^\infty e^{-u^2}du$. This integral is finite, positive, and Tonelli permits squaring it. The substitution $x=r\cos\theta$, $y=r\sin\theta$ on the first quadrant gives
> $$
> \left(\int_0^\infty e^{-u^2}du\right)^2=\int_0^{\pi/2}\int_0^\infty e^{-r^2}r\,dr\,d\theta=\frac\pi4.
> $$
> Taking the positive square root proves $\Gamma(1/2)=\sqrt\pi$.
>
> **(c).** Integrating $\int_0^\infty e^{-t}t^sdt$ by parts gives $s\int_0^\infty e^{-t}t^{s-1}dt$. Both endpoint terms vanish: at zero $t^s\to0$ because $\operatorname{Re}s>0$, and at infinity the exponential dominates the power. This is the required recurrence, which also gives the meromorphic continuation by $\Gamma(s)=\Gamma(s+r)/[s(s+1)\cdots(s+r-1)]$.
>
> **(d).** The substitution $t=nu$ gives the stated integral on $[0,1]$. Integration by parts, with antiderivative $u^s/s$, yields
> $$
> I_n(s)=\frac{n^{s+1}}s\int_0^1(1-u)^{n-1}u^sdu=\frac1s\left(\frac n{n-1}\right)^{s+1}I_{n-1}(s+1)\quad(n>1).
> $$
> The base integral is $I_1(z)=1/z-1/(z+1)=1/[z(z+1)]$. Iterating gives
> $$
> I_n(s)=\frac{n^sn!}{s(s+1)\cdots(s+n)}=\frac{n^s}{s\prod_{m=1}^n(1+s/m)}.
> $$
> For $t\in[0,n]$, $(1-t/n)^n\le e^{-t}$. Extend this factor by zero for $t>n$. Pointwise it tends to $e^{-t}$, and for $s$ in a compact subset of $\operatorname{Re}s>0$ the absolute integrands are dominated by $e^{-t}(t^{a-1}+t^{b-1})$, where $0<a\le\operatorname{Re}s\le b$. Dominated convergence gives $I_n(s)\to\Gamma(s)$ locally uniformly on that half-plane.
>
> Denote the displayed meromorphic rational-exponential expression by $J_n(s)$. It obeys
> $$
> J_n(s)=\frac{s+n+1}{ns}J_n(s+1).
> $$
> Iterating this identity extends its locally uniform convergence to every compact subset of $\mathbb C\setminus\{0,-1,-2,\ldots\}$, with limit the meromorphically continued $\Gamma(s)$. This makes sense of $J_n(-s)$ without claiming its defining integral converges simultaneously with the integral for $J_n(s)$.
>
> For $s\notin\mathbb Z$, take limits in the exact product
> $$
> J_n(s)J_n(-s)=\frac{-1}{s^2\prod_{m=1}^n(1-s^2/m^2)}.
> $$
> The given sine product is locally uniformly convergent, since $\sum_m\sup_{s\in K}|s^2/m^2|<\infty$ on compact $K$. Away from its zeros its reciprocals converge locally uniformly as well. Thus $\Gamma(s)\Gamma(-s)=-\pi/[s\sin\pi s]$. Multiply by $-s$ and apply (c) to obtain (4.15), as an identity of meromorphic functions. This supplies the convergence and continuation missing from the source's deliberately heuristic product argument.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 4.4.1, printed pp. 123–124 / PDF pp. 137–138]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Proof inputs:** Dominated convergence, Tonelli, polar-coordinate integration, and Euler's sine product are explicitly used. The sine product is given in the exercise and is not reproved here. Formula (4.15) and the Gamma continuation are on printed p.120/PDF p.134. The integral $I_n(-s)$ is never used outside its defining half-plane without meromorphic continuation.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
