---
title: "Exercise MF90: The Hankel Contour for Hurwitz Zeta"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.7, Exercise 4.7.5, printed p. 138, PDF p. 152"
source_refs:
  - "S7/ch-4/sec-7/ex-5"
created: 2026-10-28
---

# Exercise MF90: The Hankel Contour for Hurwitz Zeta

## Problem Statement

> [!question] Original Exercise 4.7.5
> (a) Show that the contour integral in the section is independent of $\epsilon$ when $0<\epsilon<1$.
>
> (b) For $\operatorname{Re}s>1$, show that as $\epsilon\to0^+$ the sum of its two linear pieces converges to $-2i\sin(\pi s)\Gamma(s)\zeta(s,r)$.
>
> (c) For $\operatorname{Re}s>1$, show that as $\epsilon\to0^+$ the circular piece converges to $0$. (A hint for this exercise is at the end of the book.)
>
> The contour is $\gamma_\epsilon$: follow the underside of the negative-real branch cut from $-\infty$ to $-\epsilon$ with argument $-\pi$, traverse the radius-$\epsilon$ circle counterclockwise, then follow the upperside from $-\epsilon$ to $-\infty$ with argument $\pi$. On the cut plane take $\arg z\in(-\pi,\pi)$ and $z^s=e^{s\log z}$. The integral is
> $$
> \int_{\gamma_\epsilon}\widetilde f_r(z)z^{s-1}\frac{dz}{z},\qquad \widetilde f_r(z)=\frac{ze^{rz}}{e^z-1},\quad0<r\le1.
> $$

## Hints

> [!hint]- Hint 1
> The function $\widetilde f_r$ has a removable singularity at zero and its other poles have modulus at least $2\pi$.

> [!hint]- Hint 2
> The two real segments have opposite orientations and arguments differing by $2\pi$. Keep both phase factors before simplifying.

> [!hint]- Hint 3
> Bound the circular integrand by a constant times $\epsilon^{\operatorname{Re}s-2}$ and multiply by the circle length $2\pi\epsilon$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> The function $\widetilde f_r$ is holomorphic at zero with value $1$, because $e^z-1=z+O(z^2)$. Its other possible poles occur at nonzero $2\pi i\mathbb Z$, outside the disk of radius one. The branch power is holomorphic in the slit plane.
>
> **(a).** For $0<\epsilon_1<\epsilon_2<1$, subtract the two integrals. Their tails beyond $-\epsilon_2$ cancel, leaving the two boundary segments and arcs of the slit annulus $\epsilon_1\le|z|\le\epsilon_2$. The integrand $\widetilde f_r(z)z^{s-2}$ is holomorphic in that annulus off the slit. Apply Cauchy's theorem first with a narrow angular gap around the cut and then take its two boundary limits; continuity on the resulting compact arcs and segments justifies the limit. The difference is zero. Thus the integral is independent of $\epsilon$. Its infinite tails converge for every fixed $s$, because with $z=-u$ the magnitude of $\widetilde f_r(-u)=u e^{-ru}/(1-e^{-u})$ decays exponentially up to a factor $u$.
>
> **(b).** Let $J_\epsilon(s)=\int_\epsilon^\infty f_r(u)u^{s-1}du$. On the lower segment, set $z=-u$ with argument $-\pi$; its orientation has $u$ decreasing from infinity to $\epsilon$. Since $\widetilde f_r(-u)=u f_r(u)$ and $dz/z=du/u$, its value is $-e^{-i\pi(s-1)}J_\epsilon(s)$. The upper segment has argument $\pi$ and $u$ increasing from $\epsilon$ to infinity, giving $e^{i\pi(s-1)}J_\epsilon(s)$. Their sum is
> $$
> \bigl(e^{i\pi(s-1)}-e^{-i\pi(s-1)}\bigr)J_\epsilon(s)=-2i\sin(\pi s)J_\epsilon(s).
> $$
> For $\operatorname{Re}s>1$, $f_r(u)=O(u^{-1})$ at zero and decays exponentially at infinity, so $J_\epsilon(s)\to g_r(s)=\Gamma(s)\zeta(s,r)$ by absolute convergence. This gives the required limit, with its sign determined by the specified contour orientation.
>
> **(c).** On $|z|=\epsilon<\epsilon_0<1$, $|\widetilde f_r(z)|\le M$. With $\sigma=\operatorname{Re}s$, $|z^{s-2}|\le\epsilon^{\sigma-2}e^{\pi|\operatorname{Im}s|}$. Therefore the absolute value of the circular integral is at most
> $$
> 2\pi M e^{\pi|\operatorname{Im}s|}\epsilon^{\sigma-1},
> $$
> which tends to zero when $\sigma>1$. Combining all three parts proves that the full, $\epsilon$-independent contour integral equals $-2i\sin(\pi s)\Gamma(s)\zeta(s,r)$ in that half-plane. For a fixed positive $\epsilon$, it is entire in $s$: the finite circle is uniformly controlled on compact parameter sets and the exponentially decaying tails dominate every additional logarithmic factor from parameter differentiation. This last observation explains the continuation role of the contour without assuming the divergent small-circle limit outside its proved range.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 4.7.5, printed p. 138 / PDF p. 152]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Checked contour definition:** The complete branch cut, segment directions, circle orientation, and integrand are specified in prose on printed p.136/PDF p.150. No source figure is required. The formula's continuation use is on printed p.137/PDF p.151; all sign and convergence details needed by the exercise are supplied above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
