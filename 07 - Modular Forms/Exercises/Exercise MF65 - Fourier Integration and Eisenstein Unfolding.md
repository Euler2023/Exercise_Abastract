---
title: "Exercise MF65: Fourier Integration and Eisenstein Unfolding"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.11, Exercise 5.11.1, printed p. 213, PDF p. 227"
source_refs:
  - "S7/ch-5/sec-11/ex-1"
created: 2026-10-28
---

# Exercise MF65: Fourier Integration and Eisenstein Unfolding

## Problem Statement

> [!question] Original Exercise 5.11.1
> (a) Let the modular form $f\in M_k(\Gamma(N))$ have Fourier expansion $f(\tau)=\sum_{n=0}^\infty a_nq_N^n$ where $q_N=e^{2\pi i\tau/N}$. Show that for all $n\ge0$,
> $$
> a_n=\frac1N\int_0^Nf(x+iy)e^{-2\pi in(x+iy)/N}dx\quad\text{for any }y>0,
> $$
> so in particular (5.29) holds.
>
> (b) Assuming absolute convergence, show that the integral in (5.30) is $0$.
>
> (c) For any cusp $s=\alpha(\infty)$ with $\alpha\in\mathrm{SL}_2(\mathbb Z)$ show by changing variable that the integral in (5.31) over a neighborhood of $s$ takes the form
> $$
> \int_{\operatorname{Im}\tau'>y_0}(f[\alpha]_k)(\tau')j(\alpha,\tau')^k\operatorname{Im}(\tau')^{k+s}|j(\alpha,\tau')|^{-2(k+s)}d\mu(\tau').
> $$
> Explain why the integrand decays exponentially as $\operatorname{Im}(\tau')\to\infty$.
>
> Here (5.29) is $\int_0^N f(x+iy)dx=0$ for cusp forms; (5.30) is $\int_0^\infty\int_0^N f(x+iy)y^{k+s-2}dx\,dy=0$; (5.31) is its hyperbolic-measure form $\int_{\mathcal D_N^*}f(\tau)\operatorname{Im}(\tau)^{k+s}d\mu(\tau)=0$, where $\mathcal D_N^*$ is the width-$N$ vertical strip and $d\mu=dx\,dy/y^2$.

> [!warning] Source issue and corrected scope
> The general modular-form hypothesis in (a) proves the coefficient formula, but (5.29), (b), and the exponential-decay conclusion in (c) use the additional hypothesis $f\in S_k(\Gamma(N))$ from the surrounding argument. For a modular form with nonzero constant term the asserted zero horizontal integral and exponential decay do not hold. The original wording is retained and the required hypothesis is explicit in the proof.

## Hints

> [!hint]- Hint 1
> Integrate the Fourier series on a horizontal period interval and use orthogonality of the exponential functions.

> [!hint]- Hint 2
> For (c), use $\operatorname{Im}(\alpha\tau')=\operatorname{Im}(\tau')/|j(\alpha,\tau')|^2$ and invariance of hyperbolic measure.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a).** A holomorphic Fourier series converges uniformly on the horizontal period segment at any fixed $y>0$. Multiplying its $r$th term by $e^{-2\pi in(x+iy)/N}$ and integrating, the real-variable exponential has integral $N$ if $r=n$ and zero otherwise. The factor depending on $y$ is $1$ when $r=n$. This proves the coefficient formula. At $n=0$ it gives $\int_0^Nf(x+iy)dx=Na_0$. Therefore (5.29) follows when $f$ is cuspidal, as assumed in the surrounding proof, and has $a_0=0$; it is not true for an arbitrary modular form with nonzero constant term.
>
> **(b).** Retain that cusp-form hypothesis. At each fixed $y$, part (a) makes the inner integral zero. Absolute convergence permits the iterated integration by Fubini's theorem, so multiplying by $y^{k+s-2}$ and integrating in $y$ gives zero. This proves (5.30), and replacing $dx\,dy$ by $y^2d\mu$ gives (5.31).
>
> **(c).** Write $\alpha=\left(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\right)$ and $j(\alpha,z)=cz+d$. Substitute $\tau=\alpha\tau'$ in a cusp neighborhood. Then
> $$
> f(\alpha\tau')=j(\alpha,\tau')^k(f[\alpha]_k)(\tau'),\quad \operatorname{Im}(\alpha\tau')=\frac{y'}{|j(\alpha,\tau')|^2},\quad d\mu(\alpha\tau')=d\mu(\tau').
> $$
> Substitution gives precisely the printed integrand. The integral is over the corresponding cusp strip in the real coordinate; the displayed height condition is the shorthand used in the source.
>
> Because $f$ is cuspidal at $\alpha\infty$, $f[\alpha]_k$ has zero constant term in its finite-width cusp expansion, and is $O(e^{-c_0y'})$ uniformly on that real-coordinate interval, for some $c_0>0$. If $c=0$, $|j|=|d|=1$. If $c\ne0$, then $|j|\ge|c|y'$, while on a bounded real interval $|j|=O(y')$. Consequently all the remaining factors, including $y'^{k+s}$ and $|j|^{-2(k+s)}$, grow or decay at most as a fixed real power of $y'$ for any fixed complex $s$. An exponential times such a power still decays exponentially, and $d\mu=dx'\,dy'/y'^2$ introduces only another power. This proves the assertion and cusp integrability locally. Without cusp vanishing this exponential estimate is false.

## Related Concepts

- [[07 - Modular Forms/Concepts/Hecke Operators]]
- [[07 - Modular Forms/Concepts/Cusp Forms]]
- [[07 - Modular Forms/Concepts/Petersson Inner Product]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.11.1, printed p. 213 / PDF p. 227]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Checked context:** Equations (5.29) and (5.30) and their cusp-form hypothesis are on printed p.211/PDF p.225; (5.31) is on printed p.212/PDF p.226. Part (b) is conditional on absolute convergence exactly as requested; this note does not infer global convergence only from one local cusp estimate.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
