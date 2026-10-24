---
title: "Exercise MF17: Fourier Coefficients by Residues and Poisson Summation"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005 (corrected fourth printing, 2016), Ch. 1, §1.1, Exercise 1.1.6, printed pp. 8–9, PDF pp. 23–24"
source_refs:
  - "S7/ch-1/sec-1/ex-6"
created: 2026-10-24
---

# Exercise MF17: Fourier Coefficients by Residues and Poisson Summation

## Problem Statement

> [!question] Exercise 1.1.6
> This exercise obtains formula (1.2) without using the cotangent. Let $f(\tau)=\sum_{d\in\mathbb Z}1/(\tau+d)^k$ for $k\geq2$ and $\tau\in\mathcal H$. Since $f$ is holomorphic (by the method of Exercise 1.1.4) and $\mathbb Z$-periodic and since $\lim_{\operatorname{Im}\tau\to\infty}f(\tau)=0$, there is a Fourier expansion $f(\tau)=\sum_{m=1}^{\infty}a_mq^m=g(q)$ as in the section, where $q=e^{2\pi i\tau}$ and
> $$
> a_m=\frac1{2\pi i}\int_\gamma\frac{g(q)}{q^{m+1}}\,dq
> $$
> is a path integral once counterclockwise over a circle about $0$ in the punctured disk $D'$.
>
> **(a)** Show that
> $$
> a_m=\int_{0+iy}^{1+iy}f(\tau)e^{-2\pi im\tau}\,d\tau
> =\int_{-\infty+iy}^{+\infty+iy}\tau^{-k}e^{-2\pi im\tau}\,d\tau
> \quad\text{for any }y>0.
> $$
>
> **(b)** Let $g_m(\tau)=\tau^{-k}e^{-2\pi im\tau}$, a meromorphic function on $\mathbb C$ with its only singularity at the origin. Show that
> $$
> -2\pi i\operatorname{Res}_{\tau=0}g_m(\tau)
> =\frac{(-2\pi i)^k}{(k-1)!}m^{k-1}.
> $$
>
> **(c)** Establish (1.2) by integrating $g_m(\tau)$ clockwise about a large rectangular path and applying the Residue Theorem. Argue that the integral along the top side goes to $a_m$ and the integrals along the other three sides go to $0$.
>
> **(d)** Let $h:\mathbb R\to\mathbb C$ be a function such that the integral $\int_{-\infty}^{\infty}|h(x)|\,dx$ is finite and the sum $\sum_{d\in\mathbb Z}h(x+d)$ converges absolutely and uniformly on compact subsets and is infinitely differentiable. Then the **Poisson summation formula** says that
> $$
> \sum_{d\in\mathbb Z}h(x+d)=\sum_{m\in\mathbb Z}\widehat h(m)e^{2\pi imx},
> \qquad \widehat h(x)=\int_{-\infty}^{\infty}h(t)e^{-2\pi ixt}\,dt.
> $$
> We will not prove this, but the idea is that the left side sum symmetrizes $h$ to a function of period $1$ and the right side sum is the Fourier series of the left side since the $m$th Fourier coefficient is $\int_0^1\sum_{d\in\mathbb Z}h(t+d)e^{-2\pi imt}\,dt=\widehat h(m)$. Letting $h(x)=1/\tau^k$ where $\tau=x+iy$ with $y>0$, show that $h$ meets the conditions for Poisson summation. Show that $\widehat h(m)=e^{-2\pi my}a_m$ with $a_m$ from above for $m>0$, and that $\widehat h(m)=0$ for $m\leq0$. Establish formula (1.2) again, this time as a special case of Poisson summation. We will see more Poisson summation and Fourier analysis in connection with Eisenstein series in Chapter 4. (A hint for this exercise is at the end of the book.)
>
> The referenced formula is [S7, printed p. 5, PDF p. 20]:
> $$
> \sum_{d\in\mathbb Z}\frac1{(\tau+d)^k}
> =\frac{(-2\pi i)^k}{(k-1)!}\sum_{m=1}^{\infty}m^{k-1}q^m,
> \qquad k\geq2,\quad q=e^{2\pi i\tau}.
> \tag{1.2}
> $$


## Hints

> [!hint]- Hint 1
> In the coefficient integral substitute $q=e^{2\pi i\tau}$. Unfold the sum over translates of the interval $[0,1]$.

> [!hint]- Hint 2
> For $m>0$, close the horizontal line downward, where the exponential decays. For $m<0$, close upward; the pole at zero is then outside.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> **Analytic setup.** On a compact subset of $\mathcal H$, the summands and all their derivatives have tails bounded by constant multiples of $|d|^{-k-r}$, so $f$ is holomorphic. Translation reindexes an absolutely convergent sum, giving period $1$. To check decay uniformly in the real part, first reduce $x=\operatorname{Re}\tau$ to $[-1/2,1/2]$. For $y\geq1$, the $O(y)$ terms with $|x+d|\leq y$ contribute $O(y^{1-k})$. The remaining tail is bounded by a constant times $\sum_{n>y}n^{-k}=O(y^{1-k})$. Thus $f(x+iy)\to0$. The removable singularity theorem applied to its periodic $q$-coordinate gives the asserted expansion with zero constant term.
>
> **(a)** As $\tau$ traverses $[iy,1+iy]$, $q$ traverses its circle counterclockwise, and $dq=2\pi iq\,d\tau$. This gives the first equality. Uniform absolute convergence on that segment allows termwise integration. Put $z=\tau+d$ in the $d$th term; since $m,d\in\mathbb Z$, $e^{-2\pi im\tau}=e^{-2\pi imz}$. The translated intervals partition the line $\operatorname{Im}z=y$, giving the second equality. The line integral is absolutely convergent because $|e^{-2\pi im(x+iy)}|=e^{2\pi my}$ and $\int_{\mathbb R}(x^2+y^2)^{-k/2}dx<\infty$.
>
> **(b)** Expanding the exponential at zero shows
> $$
> g_m(z)=\sum_{r=0}^{\infty}\frac{(-2\pi im)^r}{r!}z^{r-k},
> \qquad \operatorname{Res}_0 g_m=\frac{(-2\pi im)^{k-1}}{(k-1)!}.
> $$
> Multiplication by $-2\pi i$ gives the required expression.
>
> **(c)** For $m\geq1$ integrate clockwise around the rectangle with top vertices $\pm R+iy$ and bottom vertices $\pm R-iR$, with the top directed left to right. On a vertical side $|z|\geq R$ and $|e^{-2\pi imz}|\leq e^{2\pi my}$, so its integral has absolute value at most $(R+y)R^{-k}e^{2\pi my}\to0$. On the bottom, the bound is $2R\cdot R^{-k}e^{-2\pi mR}\to0$. The top converges to $a_m$ by (a). The clockwise residue theorem now gives
> $$
> a_m=-2\pi i\operatorname{Res}_0g_m
> =\frac{(-2\pi i)^k}{(k-1)!}m^{k-1}.
> $$
> Substitute into the Fourier series. The resulting series converges for $|q|<1$ because its coefficients grow polynomially. This proves (1.2).
>
> **(d): hypotheses.** Fix $y>0$ and set $h(x)=(x+iy)^{-k}$. It is in $L^1(\mathbb R)$: it is bounded on bounded intervals and is $O(|x|^{-k})$ at infinity. For every $r\geq0$,
> $$
> h^{(r)}(x)=(-1)^r k(k+1)\cdots(k+r-1)(x+iy)^{-k-r},
> $$
> with the empty product equal to $1$. On each compact real interval, the translated derivative terms are bounded, for sufficiently large $|d|$, by $C_{r,K}|d|^{-k-r}$. Their series therefore converges uniformly, proving absolute local uniform convergence of the original sum and termwise differentiability of every order. Its periodization is a smooth periodic function, exactly the regularity required by the stated Poisson formula.
>
> **(d): coefficients.** For $m>0$, substitute $z=x+iy$:
> $$
> \widehat h(m)=e^{-2\pi my}\int_{-\infty+iy}^{+\infty+iy}z^{-k}e^{-2\pi imz}\,dz
> =e^{-2\pi my}a_m.
> $$
> For $m=0$, the antiderivative $z^{1-k}/(1-k)$ tends to zero at both ends of that line, so $\widehat h(0)=0$. For $m<0$, close the line upward using the rectangle from height $y$ to height $R$. There is no pole inside. The vertical sides are bounded by $O(R^{1-k})e^{2\pi my}$ and the upper side by $2R^{1-k}e^{2\pi mR}$, which tend to zero. Thus $\widehat h(m)=0$.
>
> Invoke Poisson summation in precisely the form stated in the exercise, as an external input rather than a theorem proved in this solution. It gives
> $$
> f(x+iy)=\sum_{m>0}a_m e^{-2\pi my}e^{2\pi imx}
> =\sum_{m>0}a_m e^{2\pi im(x+iy)},
> $$
> again yielding (1.2). Its right-hand series is absolutely convergent by the explicit coefficient formula, so there is no unresolved convergence issue in this application.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]

## Notes

- **External inputs:** The coefficient integral, removable singularity theorem and residue theorem are elementary complex-analysis inputs. Poisson summation is explicitly supplied without proof by part (d); all of its application-specific hypotheses have been verified here.
- **Appendix:** The zero and negative frequency hints were checked at [S7, Appendix A, printed p. 413, PDF p. 424].
- **Comparison:** [[07 - Modular Forms/Exercises/Exercise MF16 - Partial Fractions and Fourier Series for the Cotangent|Exercise 1.1.5]] gives the alternate cotangent route, which is not used in the residue proof above.

- **Source and proof status:** The complete numbered exercise was checked against the original PDF at [S7, Ch. 1, §1.1, Exercise 1.1.6, printed pp. 8–9, PDF pp. 23–24]. The solution is an independent derivation in this vault; named external inputs are identified above.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive#Chapter 1|Diamond–Shurman Chapter 1]]. Learning status remains `not-started`.
