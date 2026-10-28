---
title: "Exercise MF104: Analytic Continuation in Zero and Negative Weight"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.10, Exercise 4.10.6, printed p. 154, PDF p. 168"
source_refs:
  - "S7/ch-4/sec-10/ex-6"
created: 2026-10-28
---

# Exercise MF104: Analytic Continuation in Zero and Negative Weight

## Problem Statement

> [!question] Original Exercise 4.10.6
> (a) Define $h_0(x)=1$ for all $x\in\mathbb R^2$. For $N\ge1$ and $k=0$ define $\vartheta_0^v$ by the section's formula. Prove Theorem4.10.2 when $k=0$.
>
> (b) When $k<0$ define $h_k(x)=\overline{h_{-k}(x)}$. Prove Theorem4.10.2 when $k<0$. (A hint for this exercise is at the end of the book.)
>
> The theorem concerns $G_k^a=\sum_v(a(v)+(-1)^k\widehat a(-v))G_k^v$: for each $\tau\in\mathcal H$, $(\pi/N)^{-s}\Gamma(|k|/2+s)G_k^a(\tau,s-k/2)$ continues to the whole plane invariant under $s\mapsto1-s$, analytically for $k\ne0$ and with simple poles at zero and one for $k=0$.

> [!warning] Source issue
> For arbitrary $a$, the weight-zero poles are at most simple, present exactly when $C=a(0)+N^{-1}\sum_v a(v)\ne0$.
>
> There is also a negative odd-weight sign error in the printed theorem and its appendix hint (printed p. 421 / PDF p. 432). With the prescribed $h_k=\overline{h_{-k}}$ and the printed combination $a(v)+(-1)^k\widehat a(-v)$, the completed function for $k<0$ satisfies $H(s)=(-1)^kH(1-s)$. It is symmetric for negative even weight and antisymmetric for negative odd weight. A symmetric negative-weight version instead uses coefficients $a(v)+\widehat a(-v)$. The derivation and a nonzero counterexample to the unconditional printed symmetry are given below.

## Hints

> [!hint]- Hint 1
> At weight zero subtract the constant $C=a(0)+\widehat a(0)$ before integrating.

> [!hint]- Hint 2
> For negative weight the degree is $|k|$. Conjugating a Fourier transform also reflects its argument; track the parity factor before multiplying by the rotation eigenvalue.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a)** Put $\Theta(t)=\Theta_0^a(\gamma\sqrt t)$ for fixed $\gamma\in\operatorname{SL}_2(\mathbb R)$. Gaussian Poisson summation gives $\Theta(t)=t^{-1}\Theta(1/t)$. Its constant at infinity is $C=a(0)+\widehat a(0)$, since only the zero shifted lattice contains the zero vector. The remaining terms decay exponentially. Initially for $\operatorname{Re}s>1$ define $H(s)=\int_0^\infty(\Theta(t)-C)t^sdt/t$. Splitting at one and applying the theta relation gives
> $$
> H(s)=\int_1^\infty(\Theta(t)-C)(t^s+t^{1-s})\frac{dt}{t}-\frac C s-\frac C{1-s}.
> $$
> The integral is entire by exponential decay, uniformly with all $s$-derivatives on compact sets. The expression is invariant under $s\mapsto1-s$ and has residues $-C,C$ at zero and one. Termwise gamma integration in its original convergence region, at $\gamma=\gamma_\tau=y^{-1/2}\begin{pmatrix}y&x\\0&1\end{pmatrix}$, gives $H(s)=(\pi/N)^{-s}\Gamma(s)G_0^a(\tau,s)$, proving the corrected pole assertion.
>
> **(b), with the necessary correction.** Put $m=-k>0$ and $\epsilon=(-1)^m$. For any integrable function, direct conjugation of the Fourier integral gives
> $$
> \widehat{\overline f}(\xi)=\overline{\widehat f(-\xi)}.
> $$
> Since $f_m(-\xi)=\epsilon f_m(\xi)$ and $\widehat f_m=(-i)^mf_m$, we obtain
> $$
> \widehat f_k(\xi)=i^m\epsilon f_k(\xi)=(-i)^mf_k(\xi),\qquad f_k(xS)=i^mf_k(x).
> $$
> The first eigenvalue is not $i^m$ when $m$ is odd. For example $f_{-1}(x,y)=(y+ix)e^{-\pi(x^2+y^2)}$ has transform $(x-iy)e^{-\pi(x^2+y^2)}=-if_{-1}$, not $if_{-1}$. This already disproves the appendix's Fourier assertion.
>
> In the source's Poisson computation the Fourier eigenvalue and the $S$-rotation eigenvalue therefore multiply to $(-i)^mi^m=1$. Writing $t_r(v)=\vartheta_k^v(\gamma\sqrt N r)$, it gives
> $$
> r t_r(v)=r^{-1}\widehat t_{1/r}(v).
> $$
> The finite transform identities of Exercise 4.10.5 now imply, for the printed coefficients $b(v)=a(v)+\epsilon\widehat a(-v)$,
> $$
> \sum_v b(v)\widehat t(v)=\sum_v(\widehat a(-v)+\epsilon a(v))t(v)=\epsilon\sum_vb(v)t(v).
> $$
> Thus $\Theta(t)=\sum_vb(v)\vartheta_k^v(\gamma\sqrt{Nt})$ satisfies $\Theta(t)=\epsilon t^{-1}\Theta(1/t)$. Its constant term is zero because $m>0$, and it decays exponentially times a polynomial as $t\to\infty$. The transformation gives rapid decay also at zero. Its Mellin transform is entire and equals
> $$
> H_k(s,\gamma)=\int_1^\infty\Theta(t)(t^s+\epsilon t^{1-s})\frac{dt}{t},\qquad
> H_k(s,\gamma)=\epsilon H_k(1-s,\gamma).
> $$
> For $\gamma=\gamma_\tau=y^{-1/2}\begin{pmatrix}y&x\\0&1\end{pmatrix}$, one has $h_k(n\gamma_\tau)=(c\tau+d)^m/y^{m/2}$ and $|n\gamma_\tau|^2=|c\tau+d|^2/y$. Termwise gamma integration in $\operatorname{Re}s>1$ consequently gives
> $$
> H_k(s,\gamma_\tau)=\pi^{-m/2}y^{-m/2}(\pi/N)^{-s}\Gamma(m/2+s)G_k^a(\tau,s-k/2).
> $$
> The nonzero prefactor is independent of $s$, so the completed Eisenstein function has exactly the same root number $\epsilon$. This proves its entire continuation, proves the printed symmetry in negative even weight, and gives the corrected antisymmetry in negative odd weight.
>
> The antisymmetric case need not vanish. Take $k=-1$, $N=3$, $a=\mathbf1_{(0,1)}$, $\tau=iY$ with $Y>1$. The two unique shortest nonzero lattice vectors are $(0,\pm1)$ in the quadratic norm $|n\gamma_\tau|^2=Yc^2+d^2/Y$. Their printed coefficients are $2/3,-1/3$ and their $h_{-1}$ values are $1/\sqrt Y,-1/\sqrt Y$. Hence
> $$
> \Theta(t)=\sqrt{\frac{t}{3Y}}e^{-\pi t/(3Y)}+o\left(\sqrt t\,e^{-\pi t/(3Y)}\right)\quad(t\to\infty),
> $$
> which is nonzero. Mellin inversion (Exercise 4.9.5, applicable because of rapid decay at both ends) shows that $H_k$ is not identically zero. It cannot be both symmetric and antisymmetric. This is a counterexample to the theorem's unrestricted negative odd-weight wording.
>
> Finally, replace $b(v)$ by $b_+(v)=a(v)+\widehat a(-v)$. Its finite transform transpose is itself, so the same calculation gives $\Theta_+(t)=t^{-1}\Theta_+(1/t)$ and an entire symmetric completion for all negative $k$. This is the intended symmetric version after correcting the coefficient sign.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions|L-functions]]

## Notes

- **Independent computational check:** For $k=-1$, $N=3$, $\tau=2i$, and $r=2$, a Gaussian lattice sum truncated to $-9\le c,d\le9$ gives $\Theta(r)\approx0.0999013907502874$ and $\Theta(1/r)\approx-0.3996055630011491$. The residual of $r\Theta(r)+r^{-1}\Theta(1/r)$ is $2.1\times10^{-16}$. This finite computation is a check of the sign, while the analytic argument above supplies the proof.

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 154 / PDF 168. The solution above is independently derived.
- **Routing:** The principal toolkit is modular-forms; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
